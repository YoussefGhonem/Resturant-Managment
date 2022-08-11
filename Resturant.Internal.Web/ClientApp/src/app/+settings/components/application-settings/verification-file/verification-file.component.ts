import { SettingsValidator } from './../../../validators/settings.validators';
import { BaseComponent } from './../../../../../@shared/base/base.component';
import { Component, Injector } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { SettingsController } from 'app/+settings/controllers/SettingsController';


@Component({
  selector: 'app-verification-file',
  templateUrl: './verification-file.component.html',
  styleUrls: ['./verification-file.component.scss']
})


export class VerificationFileComponent extends BaseComponent {
  uploadedFileSubmit: boolean = false;
  verificationFileForm!: UntypedFormGroup;

  constructor(
      public override injector: Injector,
      private _formBuilder: UntypedFormBuilder
  ) {
    super(injector);
  }

  ngOnInit() {
    this.verificationFileForm = this._formBuilder.group({
      uploadedFile: ['', SettingsValidator.verificationDocument]
    });
  }

  isInvalid(controllerName: string) {
    return this.verificationFileForm.get(controllerName).errors && this.verificationFileForm.get(controllerName).touched;
  }

  get form() {
    return this.verificationFileForm.controls;
  }

  onFileSubmit() {
    this.uploadedFileSubmit = true;
    if (this.verificationFileForm.invalid) {
      return;
    }
    let body = this.verificationFileForm.getRawValue();
    this.httpService.PUT(SettingsController.VerificationDocument, body.uploadedFile, undefined)
        .subscribe(() => {
          this.notificationService.success("Success", "Bingo!!!");
        });
  }

}
