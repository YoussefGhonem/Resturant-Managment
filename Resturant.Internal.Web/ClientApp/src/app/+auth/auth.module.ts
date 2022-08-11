import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from "app/+auth/auth-routing.module";
// Libs
import { NgbCarouselModule, NgbModule, NgbToastModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxMaskModule } from "ngx-mask";
// @shared
import { SharedDirectivesModule } from "@shared/directives/shared-directives.module";
// Components
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from "app/+auth/components/signup/signup.component";
import { LoginComponent } from "app/+auth/components/login/login.component";
import { ForgotPasswordComponent } from "app/+auth/components/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "app/+auth/components/reset-password/reset-password.component";
import { defineLordIconElement } from "lord-icon-element";
import lottie from "lottie-web";

//#region
import { Page401Component } from './errors/page401/page401.component';
import { Page402Component } from './errors/page402/page402.component';
import { Page404Component } from './errors/page404/page404.component';
import { Page500Component } from './errors/page500/page500.component';
import { ValidationPasswordOptionsComponent } from './components/validation-password-options/validation-password-options.component';

//#endregion

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    Page401Component,
    Page402Component,
    Page404Component,
    Page500Component,
    ValidationPasswordOptionsComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NgbModule,
    NgbCarouselModule,
    NgbToastModule,
    SharedDirectivesModule,
    NgxMaskModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AuthModule {
  constructor() {
    defineLordIconElement(lottie.loadAnimation);
  }
}
