export const IdentityController = {
  Login: `identity/login`,
  Signup: `identity/signup`,
  RegisterNewUser: `identity/register`,
  ForgetPassword: (email: string) => `identity/${email}/forgot-password`,
  ResetPassword: (email: string) => `identity/${email}/reset-password`,
}
