import { UsersComponent } from './users/users.component';
import { VendorsComponent } from './users/vendors/vendors.component';
// Libs
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbAccordionModule,
  NgbActiveModal,
  NgbDropdownModule,
  NgbNavModule,
  NgbPaginationModule,
  NgbRatingModule,
  NgbToastModule,
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
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedPipesModule } from '@shared/pipes/pipes.module';
import { UsersRoutingModule } from './users-routing.module';
import { AllUsersComponent } from './users/all-users/all-users.component';
import { CommiteeMembersComponent } from './users/commitee-members/commitee-members.component';
import { LocalAdminsComponent } from './users/local-admins/local-admins.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { PublicUserComponent } from './users/public-user/public-user.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ChangePasswordComponent } from './profile-settings/change-password/change-password.component';
import { UpdateUserProfileComponent } from './profile-settings/update-user-profile/update-user-profile.component';
import { UpdateProfileImageComponent } from './profile-settings/update-profile-image/update-profile-image.component';
import { VerificationTabComponent } from './profile-settings/verification-document/verification-document.component';
import { ReactiveValidationModule } from 'angular-reactive-validation';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AddSignatureComponent } from './profile-settings/signature-pad-popup/signature-pad-popup.component';
import { PdfViewerComponent } from './profile-settings/verification-document/pdf-viewer-preview/pdf-viewer-preview.component';
import { SignaturePadModule } from '@ng-plus/signature-pad'
@NgModule({
  declarations: [
    UsersComponent,
    VendorsComponent,
    AllUsersComponent,
    CommiteeMembersComponent,
    LocalAdminsComponent,
    CreateUserComponent,
    PublicUserComponent,
    ProfileComponent,
    ProfileSettingsComponent,
    ChangePasswordComponent,
    UpdateUserProfileComponent,
    UpdateProfileImageComponent,
    VerificationTabComponent,
    AddSignatureComponent,
    PdfViewerComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbToastModule,
    NgbAccordionModule,
    NgbRatingModule,
    NgbTooltipModule,
    NgxSliderModule,
    ReactiveValidationModule,
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
    AutocompleteLibModule,
    SignaturePadModule,
    PdfViewerModule
  ],
  providers: [
    NgbActiveModal
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UsersModule {
}
