import { ProfileSettingsComponent } from './profile-settings/profile-settings.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'profile-settings',
    component: ProfileSettingsComponent
  },
  {
    path: 'profile-settings/change-password',
    component: ProfileSettingsComponent
  },
  {
    path: 'profile-settings/sign',
    component: ProfileSettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
