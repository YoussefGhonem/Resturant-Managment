import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import {CountriesComponent} from "app/+settings/components/countries/countries.component";

const routes: Routes = [
  {
    path: "countries",
    component: CountriesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {
}
