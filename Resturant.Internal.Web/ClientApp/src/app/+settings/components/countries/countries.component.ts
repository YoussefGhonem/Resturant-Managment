import { Component, Injector, OnInit } from '@angular/core';
import { CountriesController } from "app/+settings/controllers/CountriesController";
import { BaseComponent } from "@shared/base/base.component";
import { debounceTime, takeUntil } from "rxjs/operators";
import { FormBuilder, FormControl, FormGroup, UntypedFormGroup } from "@angular/forms";

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent extends BaseComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  countries: any[] = [];
  total: number = 0;
  form!: FormGroup;

  constructor(public override injector: Injector, private _formBuilder: FormBuilder) {
    super(injector);

  }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: 'Application Settings' },
      { label: 'Countries List', active: true }
    ];
    this.initSearchForm();
    this.loadCountries();
  }

  private initSearchForm(): void {
    this.form = this._formBuilder.group({
      // Pagination
      pageNumber: new FormControl(1),
      pageSize: new FormControl(10),
      // Filters
      name: new FormControl(null),
      isActive: new FormControl(''),
    });

    this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe(res => {
        this.form?.controls['pageNumber'].patchValue(1, { emitEvent: false });
        this.loadCountries();
      });
  }
  pageChange(pageNumber: number) {
    this.form.controls['pageNumber'].patchValue(pageNumber, { emitEvent: false });
    this.loadCountries();
  }

  private loadCountries() {
    let filters = this.form.getRawValue();
    console.log("filters", filters);

    this.httpService.GET(CountriesController.Countries, filters)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(res => {
        this.countries = res?.data;
        this.total = res?.total;
      });
  }
}
