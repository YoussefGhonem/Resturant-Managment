// Template Modules
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from "./settings-routing.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbAccordionModule,
  NgbAlertModule,
  NgbDropdownModule,
  NgbModule,
  NgbNavModule,
  NgbPaginationModule,
  NgbRatingModule,
  NgbTooltipModule,
  NgbTypeaheadModule
} from "@ng-bootstrap/ng-bootstrap";
import { NgxSliderModule } from "@angular-slider/ngx-slider";
import { SimplebarAngularModule } from "simplebar-angular";
import { SwiperModule } from "ngx-swiper-wrapper";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { DropzoneModule } from "ngx-dropzone-wrapper";
import { FlatpickrModule } from "angularx-flatpickr";
import { NgSelectModule } from "@ng-select/ng-select";
import { CountToModule } from "angular-count-to";
import { SharedModule } from "app/shared/shared.module";
import { NgxMaskModule } from "ngx-mask";
import { SharedDirectivesModule } from "@shared/directives/shared-directives.module";
import { SharedPipesModule } from '@shared/pipes/pipes.module';
import { ReactiveValidationModule } from "angular-reactive-validation";
// Components
import { CountriesComponent } from './components/countries/countries.component';
import { SharedComponentsModule } from "@shared/components/shared-components.module";
import { ApplicationSettingsComponent } from './components/application-settings/application-settings.component';
import {
  UserTermsAndConditionsComponent
} from './components/application-settings/user-terms-and-conditions/user-terms-and-conditions.component';
import {
  VendorTermsAndConditionsComponent
} from './components/application-settings/vendor-terms-and-conditions/vendor-terms-and-conditions.component';
import {
  VerificationFileComponent
} from './components/application-settings/verification-file/verification-file.component';
import {
  ConfigurationUpdateComponent
} from './components/application-settings/configuration-update/configuration-update.component';

@NgModule({
  declarations: [
    CountriesComponent,
    ApplicationSettingsComponent,
    VendorTermsAndConditionsComponent,
    UserTermsAndConditionsComponent,
    VerificationFileComponent,
    ConfigurationUpdateComponent
  ],
  imports: [
    SettingsRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbAlertModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbAccordionModule,
    NgbRatingModule,
    NgbTooltipModule,
    NgxSliderModule,
    NgbModule,
    SimplebarAngularModule,
    SwiperModule,
    CKEditorModule,
    DropzoneModule,
    FlatpickrModule.forRoot(),
    NgSelectModule,
    CountToModule,
    SharedModule,
    NgxMaskModule.forRoot(),
    SharedDirectivesModule,
    SharedComponentsModule,
    SharedPipesModule,
    ReactiveValidationModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class SettingsModule {
}
