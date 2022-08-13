import { Validators } from "angular-reactive-validation";
import { emailValidator, whiteSpaceHtmlValidator, whiteSpaceValidator } from "@shared/custom-validators";

export const SettingsValidator = {
  aboutUs: [
    Validators.required('about Us is required'),
    whiteSpaceHtmlValidator(`Value should not be a white spaces`)

  ],
  emailService: [
    Validators.required('Email is required'),
    whiteSpaceValidator(`Value should not be a white spaces`),
    Validators.minLength(3, minLength => `The minimum length is ${minLength}`),
    Validators.maxLength(100, maxLength => `Maximum length is ${maxLength}`),
    emailValidator(`Email is not valid`),
  ],
  numberService: [
    Validators.required('number Service is required'),
    whiteSpaceHtmlValidator(`Value should not be a white spaces`),
  ],
  workWithUsDescription: [
    Validators.required('number Service is required'),
    whiteSpaceHtmlValidator(`work With Us Description should not be a white spaces`),
  ],
};
