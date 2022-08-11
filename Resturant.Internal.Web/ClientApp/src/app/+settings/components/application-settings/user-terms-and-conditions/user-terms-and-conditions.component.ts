import { SettingsValidator } from './../../../validators/settings.validators';
import { BaseComponent } from '../../../../../@shared/base/base.component';
import { Component, Injector } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SettingsController } from 'app/+settings/controllers/SettingsController';

@Component({
  selector: 'app-user-terms-and-conditions',
  templateUrl: './user-terms-and-conditions.component.html',
  styleUrls: ['./user-terms-and-conditions.component.scss']
})


export class UserTermsAndConditionsComponent extends BaseComponent {
  userTermsSubmit: boolean = false;
  public UserEditor = ClassicEditor;
  userTermsForm!: UntypedFormGroup;
  editorConfig = {
    removePlugins: ['CKFinderUploadAdapter', 'CKFinder', 'EasyImage', 'Image', 'ImageCaption', 'ImageStyle', 'ImageToolbar', 'ImageUpload'],
    removeButtons: ['Image']
  };

  constructor(
      public override injector: Injector,
      private _formBuilder: UntypedFormBuilder
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.userTermsForm = this._formBuilder.group({
      userTerms: ['', SettingsValidator.termsAndConditions]
    });
  }

  isInvalid(controllerName: string) {
    return this.userTermsForm.get(controllerName).errors && this.userTermsForm.get(controllerName).touched;
  }

  get form() {
    return this.userTermsForm.controls;
  }

  onUserSubmit() {
    this.userTermsSubmit = true;
    if (this.userTermsForm.invalid) {
      return;
    }
    let userTerms = this.userTermsForm.getRawValue();
    let body = {
      PublicTermsAndConditions: userTerms.userTerms
    }
    this.httpService.PUT(SettingsController.UserTermsAndConditions, body, undefined)
        .subscribe(() => {
          this.notificationService.success("Success", "Bingo!!!");
        })
  }
}
