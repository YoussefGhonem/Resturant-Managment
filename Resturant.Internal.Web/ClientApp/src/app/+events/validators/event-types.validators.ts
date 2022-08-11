import { Validators } from "angular-reactive-validation";
import { whiteSpaceValidator } from "@shared/custom-validators";

export const EventTypesValidator = {
  name: [
    Validators.required('Name is required'),
    whiteSpaceValidator(`Value should not be a white spaces`),
    Validators.minLength(3, minLength => `The minimum length is ${minLength}`),
    Validators.maxLength(100, maxLength => `Maximum length is ${maxLength}`),
  ],
  description: [
    Validators.minLength(3, minLength => `The minimum length is ${minLength}`),
    Validators.maxLength(1000, maxLength => `Maximum length is ${maxLength}`),
  ],

};
