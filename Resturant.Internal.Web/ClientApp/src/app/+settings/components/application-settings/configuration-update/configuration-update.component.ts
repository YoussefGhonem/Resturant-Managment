import { SettingsValidator } from '../../../validators/settings.validators';
import { FormControl, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { SettingsController } from 'app/+settings/controllers/SettingsController';
import { BaseComponent } from '../../../../../@shared/base/base.component';
import { Component, Injector } from "@angular/core";


@Component({
  selector: 'configuration-update',
  templateUrl: './configuration-update.component.html',
  styleUrls: ['./configuration-update.component.scss']
})

export class ConfigurationUpdateComponent extends BaseComponent {
  updateFeesSubmit: boolean = false;
  ticketFeesForm!: UntypedFormGroup;

  constructor
  (
      public override injector: Injector,
      private _formBuilder: UntypedFormBuilder
  ) {
    super(injector);
  }

  ngOnInit() {
    this.ticketFeesForm = this._formBuilder.group({
      updatedFees: new FormControl(null, SettingsValidator.fees)
    });
  }

  form() {
    return this.ticketFeesForm.controls;
  }

  isInvalid(controllerName: string) {
    return this.ticketFeesForm.get(controllerName).errors && this.ticketFeesForm.get(controllerName).touched;
  }

  onSubmit() {
    this.updateFeesSubmit = true;
    if (this.ticketFeesForm.invalid) {
      return;
    }

    let body = this.ticketFeesForm.getRawValue();

    this.httpService.PUT(SettingsController.EventFees, body.updatedFees, undefined)
        .subscribe(() => {
          this.notificationService.success('Success', 'Bingo');
        });
  }
}
