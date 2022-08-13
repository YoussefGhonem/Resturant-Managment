import { takeUntil } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';
import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BaseComponent } from '@shared/base/base.component';
import { EventTypesController } from 'app/+events/controllers/EventTypesController';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEditEventTypesComponent } from './add-edit-event-types/add-edit-event-types.component';
import { ngbModalOptions } from '@shared/default-values';

@Component({
  selector: 'app-event-types',
  templateUrl: './event-types.component.html',
  styleUrls: ['./event-types.component.scss']
})
export class EventTypesComponent extends BaseComponent implements OnInit {
  breadCrumbItems!: Array<{}>;
  eventTypes: any[] = [];
  total: number = 0;
  form!: FormGroup;

  constructor(public activeModal: NgbActiveModal, public modalService: NgbModal, public override injector: Injector, private _formBuilder: FormBuilder) {
    super(injector);
  }
  
  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: 'Application Settings' },
      { label: 'Event-Types', active: true }
    ];
    this.initSearchForm();
    this.loadEventTypes();

  }

  private initSearchForm(): void {
    this.form = this._formBuilder.group({
      // Pagination
      pageNumber: new FormControl(1),
      pageSize: new FormControl(10),
      // Filters
      name: new FormControl(null),
      isActive: new FormControl(''),
    });

    this.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe(res => {
        this.form?.controls['pageNumber'].patchValue(1, { emitEvent: false });
        this.loadEventTypes();
      });
  }
  pageChange(pageNumber: number) {
    this.form.controls['pageNumber'].patchValue(pageNumber, { emitEvent: false });
    this.loadEventTypes();
  }

  private loadEventTypes() {
    let filters = this.form.getRawValue();
    console.log("filters", filters);

    this.httpService.GET(EventTypesController.EventTypes, filters)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(res => {
        this.eventTypes = res?.data;
        this.total = res?.total;
      });
  }

  add() {
    const modalRef = this.modalService.open(AddEditEventTypesComponent, {
      ...ngbModalOptions,
      windowClass: 'modal modal-success'
    });
    modalRef.componentInstance.mode = 'add';
    modalRef
      .result
      .then((actionCompleted: boolean) => !actionCompleted || this.activeModal.close(true) || this.loadEventTypes())
      .catch(() => {
      });
  }
  edit(eventType: any) {
    const modalRef = this.modalService.open(AddEditEventTypesComponent, {
      ...ngbModalOptions,
      windowClass: 'modal modal-success'
    });
    modalRef.componentInstance.mode = 'edit';
    modalRef.componentInstance.eventType = eventType;
    modalRef
      .result
      .then((actionCompleted: boolean) => !actionCompleted || this.activeModal.close(true) || this.loadEventTypes())
      .catch(() => {
      });
  }
}
