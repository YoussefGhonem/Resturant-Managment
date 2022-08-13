import { takeUntil } from 'rxjs/operators';
import { Component, Injector, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BaseComponent } from '@shared/base/base.component';
import { SettingsValidator } from 'app/+settings/validators/settings.validators';
import { SettingsController } from 'app/+users/controllers';

@Component({
  selector: 'about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent extends BaseComponent implements OnInit {
  public UserEditor = ClassicEditor;
  form!: UntypedFormGroup;
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
    this.initForm()
  }

  initForm() {
    this.form = this._formBuilder.group({
      aboutUs: [null, SettingsValidator.aboutUs],
      emailService: [null, SettingsValidator.emailService],
      numberService: [null, SettingsValidator.numberService],
      workWithUsDescription: [null, SettingsValidator.workWithUsDescription],
    });
  }

  isInvalid(controllerName: string) {
    return this.form.get(controllerName).errors && this.form.get(controllerName).touched;
  }

  submit() {
    let body = this.form.getRawValue();
    this.httpService.PUT(SettingsController.UpdateAboutUsSettings, body)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(res => {
        this.notificationService.success('Setings Update', 'Your changes successfully updated! 🎉');
      });
  }
}
