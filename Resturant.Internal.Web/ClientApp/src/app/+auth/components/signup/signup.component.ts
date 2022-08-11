import { RegisterValidator } from './../../validators/register.validator';
import { VendorsController } from './../../controllers/VendorsController';
import { BaseComponent } from './../../../../@shared/base/base.component';
import { Component, Injector, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ValidationPasswordOptionsComponent } from '../validation-password-options/validation-password-options.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent extends BaseComponent implements OnInit {

  @ViewChild(ValidationPasswordOptionsComponent) validationPasswordOptionsComponent: ValidationPasswordOptionsComponent
  // Login Form
  SignupForm!: UntypedFormGroup;
  submitted = false;
  fieldTextType!: boolean;
  // set the current year
  year: number = new Date().getFullYear();
  // Display Form or Success
  displayForm: boolean = true;

  constructor(
    public override injector: Injector,
    private formBuilder: UntypedFormBuilder
  ) {
    super(injector);
    this.displayForm = true;
  }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.SignupForm = this.formBuilder.group({
      firstName: ['', RegisterValidator.userAccount.firstName],
      lastName: ['', RegisterValidator.userAccount.lastName],
      email: ['', RegisterValidator.userAccount.email],
      password: ['', RegisterValidator.userAccount.password],
      confirmPassword: ['', RegisterValidator.userAccount.confirmPassword],
      phoneNumber: ['', RegisterValidator.userAccount.phoneNumber]
    });
  }

  showValidationPasswordOption() {
    let input = document.getElementById("password-contain") as HTMLElement;
    input.style.display = "block"
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.SignupForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.SignupForm.invalid) {
      return;
    }

    let body = this.SignupForm.getRawValue();

    this.httpService.POST(VendorsController.Signup, body)
      .subscribe(() => {
        this.displayForm = false;
        this.notificationService.success("Success", "Bingo");
      })
  }

  isInvalid(controllerName: string) {
    return this.SignupForm.get(controllerName)?.errors && this.SignupForm.get(controllerName)?.touched;
  }

  /**
   * Password Hide/Show
   */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

}
