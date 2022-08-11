import { EventsRoutingModule } from "app/+events/events-routing.module";

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NgbAccordionModule,
  NgbActiveModal,
  NgbDropdownModule,
  NgbNavModule,
  NgbPaginationModule,
  NgbRatingModule,
  NgbToastModule,
  NgbTooltipModule,
  NgbTypeaheadModule
} from "@ng-bootstrap/ng-bootstrap";
import { NgxSliderModule } from "@angular-slider/ngx-slider";
import { SimplebarAngularModule } from "simplebar-angular";
import { SwiperModule } from "ngx-swiper-wrapper";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { DropzoneModule } from "ngx-dropzone-wrapper";
import { FlatpickrModule } from "angularx-flatpickr";
import { NgSelectModule } from "@ng-select/ng-select";
import { CountToModule } from "angular-count-to";
import { SharedModule } from "app/shared/shared.module";
import { NgxMaskModule } from "ngx-mask";
import { SharedDirectivesModule } from "@shared/directives/shared-directives.module";
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { SharedPipesModule } from '@shared/pipes/pipes.module';
import { EventTypesComponent } from "./components/event-types/event-types.component";
import {
  AddEditEventTypesComponent
} from './components/event-types/add-edit-event-types/add-edit-event-types.component';
import { ToastsContainer } from "app/+dashboard/components/dashboard/toasts-container.component";
import { ReactiveValidationModule } from "angular-reactive-validation";

@NgModule({
  declarations: [
    EventTypesComponent,
    AddEditEventTypesComponent,
    ToastsContainer
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbDropdownModule,
    NgbNavModule,
    NgbToastModule,
    NgbAccordionModule,
    NgbRatingModule,
    NgbTooltipModule,
    ReactiveValidationModule,
    NgxSliderModule,
    SimplebarAngularModule,
    SwiperModule,
    CKEditorModule,
    DropzoneModule,
    FlatpickrModule.forRoot(),
    NgSelectModule,
    CountToModule,
    SharedModule,
    NgxMaskModule.forRoot(),
    SharedDirectivesModule,
    SharedComponentsModule,
    SharedPipesModule,

  ],
  providers: [
    NgbActiveModal
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class EventsModule {
}
