import { BaseComponent } from '@shared/base/base.component';
import { Component, Injector } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-settings',
  templateUrl: './application-settings.component.html',
  styleUrls: ['./application-settings.component.css']
})


export class ApplicationSettingsComponent extends BaseComponent {

  // bread crumb items
  breadCrumbItems!: Array<{}>;
  uploadedFileSubmit: boolean = false;
  verificationFileForm!: UntypedFormGroup;


  constructor(
      public override injector: Injector,
      private _formBuilder: UntypedFormBuilder
  ) {
    super(injector);
  }

  ngOnInit(): void {

    this.breadCrumbItems = [
      {label: 'Home'},
      {label: 'Settings', active: true}
    ];

    this.verificationFileForm = this._formBuilder.group({
      uploadedFile: ['', Validators.required]
    });

  }

  get form() {
    return this.verificationFileForm.controls;
  }


}
