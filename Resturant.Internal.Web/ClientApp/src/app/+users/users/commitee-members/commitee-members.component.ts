import { ActivateComponent } from '@shared/components/activate/activate.component';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Component, Injector, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from '@shared/base/base.component';
import { CommitteeMembersController } from 'app/+users/controllers/index';
import { DeleteComponent } from '@shared/components/delete/delete.component';
import { ngbModalOptions } from '@shared/default-values';
import { DeactivateComponent } from '@shared/components/deactivate/deactivate.component';

@Component({
  selector: 'commitee-members-list',
  templateUrl: './commitee-members.component.html',
  styleUrls: ['./commitee-members.component.scss']
})
export class CommiteeMembersComponent extends BaseComponent implements OnInit {
  members: any[] = [];
  form!: FormGroup;
  total: number = 0;
  @Input('filters') filters!: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    public modalService: NgbModal,
    public override injector: Injector,
    private _formBuilder: FormBuilder) {
    super(injector);
  }

  ngOnChanges(): void {
    this.filters.valueChanges.pipe(debounceTime(500))
      .subscribe(value => {
        this.form.controls['name'].patchValue(this.filters.getRawValue().name);
        this.form.controls['isActive'].patchValue(this.filters.getRawValue().isActive);
        this.form?.controls['pageNumber'].patchValue(1, { emitEvent: false });
        this.loadMembers();
      });
  }

  ngOnInit(): void {
    this.initSearchForm();
    this.loadMembers();
  }

  private initSearchForm(): void {
    this.form = this._formBuilder.group({
      // Pagination
      pageNumber: new FormControl(1),
      pageSize: new FormControl(10),
      // Filters
      name: new FormControl(''),
      isActive: new FormControl(''),
    });

  }

  pageChange(pageNumber: number) {
    this.form.controls['pageNumber'].patchValue(pageNumber, { emitEvent: false });
    this.loadMembers();
  }

  private loadMembers() {
    let filters = this.form.getRawValue();
    console.log("filters", filters);

    this.httpService.GET(CommitteeMembersController.CommitteeMembers, filters)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(res => {
        this.members = res?.data;
        this.total = res?.total;
      });
  }

  delete(item: any) {
    const modalRef = this.modalService.open(DeleteComponent, {
      ...ngbModalOptions,
      windowClass: 'modal modal-danger'
    });
    modalRef.componentInstance.data = item;
    modalRef.componentInstance.url = CommitteeMembersController.Delete(item.id);
    modalRef
      .result
      .then((actionCompleted: boolean) => !actionCompleted || this.activeModal.close(true) || this.loadMembers())
      .catch(() => {
      });
  }

  activate(item: any) {
    const modalRef = this.modalService.open(ActivateComponent, {
      ...ngbModalOptions,
      windowClass: 'modal modal-success'
    });
    modalRef.componentInstance.data = item;
    modalRef.componentInstance.url = CommitteeMembersController.Activate(item.id);
    modalRef
      .result
      .then((actionCompleted: boolean) => !actionCompleted || this.activeModal.close(true) || this.loadMembers())
      .catch(() => {
      });
  }

  deactivate(item: any) {
    const modalRef = this.modalService.open(DeactivateComponent, {
      ...ngbModalOptions,
      windowClass: 'modal modal-danger'
    });
    modalRef.componentInstance.data = item;
    modalRef.componentInstance.url = CommitteeMembersController.Activate(item.id);
    modalRef
      .result
      .then((actionCompleted: boolean) => !actionCompleted || this.activeModal.close(true) || this.loadMembers())
      .catch(() => {
      });
  }
}
