import { takeUntil } from 'rxjs/operators';
import { Component, Injector, OnInit } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { BaseComponent } from '@shared/base/base.component';
import { SettingsController } from 'app/+users/controllers';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss']
})
export class PressComponent extends BaseComponent implements OnInit {
  data: any[];
  constructor(public override injector: Injector, private _formBuilder: UntypedFormBuilder) {
    super(injector);
  }
  ngOnInit(): void {
  }

  getDetails() {
    this.httpService.GET(SettingsController.Press)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
      });
  }
}
