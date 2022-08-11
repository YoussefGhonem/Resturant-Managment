import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { EventTypesComponent } from './components/event-types/event-types.component';

const routes: Routes = [
  {
    path: 'event-types',
    component: EventTypesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule {
}
