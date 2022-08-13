import { takeUntil } from 'rxjs/operators';
import { Component, Injector, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from '@shared/base/base.component';
import { EventTypesController } from 'app/+events/controllers/EventTypesController';

@Component({
  selector: 'app-add-edit-event-types',
  templateUrl: './add-edit-event-types.component.html',
  styleUrls: ['./add-edit-event-types.component.scss']
})
export class AddEditEventTypesComponent extends BaseComponent implements OnInit {
  @Input() mode: string = 'add';
  @Input() eventType: any;
  form!: FormGroup;

  constructor(public override injector: Injector, public modalService: NgbActiveModal,
    private formBuilder: FormBuilder) {
    super(injector);
  }
  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      name: new FormControl(null),
      description: new FormControl(null),
    });

    this.form?.controls['name'].patchValue(this.eventType?.name);
    this.form.controls['description'].patchValue(this.eventType?.description);
  }

  submit() {
    let body = this.form.getRawValue();

    if (this.mode == 'add') {
      this.httpService.POST(EventTypesController.Create, body)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(res => {
          this.modalService.close(true);
          this.notificationService.success('Exclude Profile', 'Your changes successfully updated! 🎉');
        });
    }
    else if (this.mode == 'edit') {
      this.httpService.PUT(EventTypesController.Update(this.eventType.id), body)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(res => {
          this.modalService.close(true);
          this.notificationService.success('Exclude Profile', 'Your changes successfully updated! 🎉');
        });
    }

  }
}
