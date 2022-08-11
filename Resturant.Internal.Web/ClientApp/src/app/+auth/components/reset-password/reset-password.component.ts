import { RegisterValidator } from './../../validators/register.validator';
import { Component, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/+auth/service';
import { BaseComponent } from '@shared/base/base.component';
import { IdentityController } from 'app/+auth/controllers/IdentityController';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent extends BaseComponent implements OnInit {
  // Login Form
  passresetForm!: UntypedFormGroup;
  submitted = false;
  passwordField!: boolean;
  confirmField!: boolean;
  error = '';
  returnUrl!: string;
  email: string;
  token: string;
  displaySuccess: boolean;
  displayForm: boolean;
  displayError: boolean;
  // set the current year
  year: number = new Date().getFullYear();

  constructor(
    public override injector: Injector,
    private _formBuilder: UntypedFormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _authService: AuthService) {
    super(injector);
    this.email = '';
    this.token = '';
    this.displayForm = true;
    this.displaySuccess = false;
    this.displayError = false;
  }

  ngOnInit(): void {
    this.passresetForm = this._formBuilder.group({
      password: ['', RegisterValidator.userAccount.password],
      confirmPassword: ['', RegisterValidator.userAccount.confirmPassword]
    });

    this._activatedRoute.queryParams
      .subscribe((params) => {
        this.email = params['email'] || '';
        this.token = params['token'] || '';
      });

    // Checking Email and Token exists
    if (this.email == '' || this.token == '') {
      this.displayError = true;
      this.displayForm = false;
    }
  }

  showValidationPasswordOption() {
    let input = document.getElementById("password-contain") as HTMLElement;
    input.style.display = "block"
  }



  // convenience getter for easy access to form fields
  get f() {
    return this.passresetForm.controls;
  }

  /**
   * Form submit
   */
  onSubmit(): any {
    this.submitted = true;
    // stop here if form is invalid
    if (this.passresetForm.invalid) return;

    let formBody = this.passresetForm.getRawValue();
    let body = {
      Token: this.token,
      NewPassword: formBody.password,
      ConfirmPassword: formBody.confirmPassword
    };
    return this.httpService.POST(IdentityController.ResetPassword(this.email), body, undefined, true)
      .subscribe(() => {
        this.displayForm = false;
        this.displaySuccess = true;
      });
  }

  isInvalid(controllerName: string) {
    return this.passresetForm.get(controllerName)?.errors && this.passresetForm.touched;
  }

  /**
   * Password Hide/Show
   */
  togglepasswordField() {
    this.passwordField = !this.passwordField;
  }

  /**
   * Password Hide/Show
   */
  toggleconfirmField() {
    this.confirmField = !this.confirmField;
  }

}
