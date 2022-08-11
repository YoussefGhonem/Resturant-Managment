import { SettingsValidator } from './../../../validators/settings.validators';
import { BaseComponent } from '../../../../../@shared/base/base.component';
import { Component, Injector } from "@angular/core";
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { SettingsController } from 'app/+settings/controllers/SettingsController';

@Component({
  selector: 'vendors-terms-and-conditions',
  templateUrl: './vendor-terms-and-conditions.component.html',
  styleUrls: ['./vendor-terms-and-conditions.component.scss']
})


export class VendorTermsAndConditionsComponent extends BaseComponent {
  vendorTermsSubmit: boolean = false;
  public VendorEditor = ClassicEditor;
  vendorTermsForm!: UntypedFormGroup;
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
    this.vendorTermsForm = this._formBuilder.group({
      vendorTermsAndConditions: ['', SettingsValidator.termsAndConditions]
    });
  }

  isInvalid(controllerName: string) {
    return this.vendorTermsForm.get(controllerName).errors && this.vendorTermsForm.get(controllerName).touched;
  }

  get form() {
    return this.vendorTermsForm.controls;
  }

  onVendorSubmit() {
    this.vendorTermsSubmit = true;
    if (this.vendorTermsForm.invalid) {
      return;
    }
    let body = this.vendorTermsForm.getRawValue();
    this.httpService.PUT(SettingsController.VendorTermsAndConditions, body, undefined)
        .subscribe(() => {
          this.notificationService.success("Success", "Bingo!!!");
        })
  }
}
