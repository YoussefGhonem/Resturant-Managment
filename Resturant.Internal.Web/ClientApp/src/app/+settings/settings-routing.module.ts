import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CountriesComponent } from "app/+settings/components/countries/countries.component";
import { ApplicationSettingsComponent } from './components/application-settings/application-settings.component';

const routes: Routes = [
  {
    path: "countries",
    component: CountriesComponent,
  },
  {
    path: "application-settings",
    component: ApplicationSettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {
}
