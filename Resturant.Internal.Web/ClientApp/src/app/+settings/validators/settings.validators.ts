import { Validators } from "angular-reactive-validation";
import { whiteSpaceHtmlValidator } from "@shared/custom-validators";

export const SettingsValidator = {
  fees: [
    Validators.required('Fees is required')
  ],
  verificationDocument: [
    Validators.required('Verification Document is required')
  ],
  termsAndConditions: [
    whiteSpaceHtmlValidator(`Value should not be a white spaces`),
  ],
};
