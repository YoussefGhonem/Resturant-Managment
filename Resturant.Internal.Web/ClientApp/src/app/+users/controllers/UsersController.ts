export const UsersController = {
  Users: `users`,
  LocalAdmins: `users/local-admins`,
  ActivateLocalAdmin: (id: string) => `users/local-admin/${id}/activate`,
  DeactivteLocalAdmin: (id: string) => `users/local-admin/${id}/deactivate`,
  DeleteLocalAdmin: (id: string) => `users/local-admin/${id}`,
  UpdateUser: 'users',
  getCompletionPercentage: 'users/complete-profile'
}
