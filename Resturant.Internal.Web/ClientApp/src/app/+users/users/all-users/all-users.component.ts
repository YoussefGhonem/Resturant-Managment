import { CommitteeMembersController } from './../../controllers/CommitteeMembersController';
import { UserRolesEnum } from 'app/+users/models/index';
import { ActivateComponent } from '@shared/components/activate/activate.component';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Component, Injector, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from '@shared/base/base.component';
import { UsersController } from 'app/+users/controllers/UsersController';
import { DeleteComponent } from '@shared/components/delete/delete.component';
import { ngbModalOptions } from '@shared/default-values';
import { DeactivateComponent } from '@shared/components/deactivate/deactivate.component';
import { PublicUserController, VendorsController } from 'app/+users/controllers/index';

@Component({
  selector: 'all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent extends BaseComponent implements OnInit {
  users: any[] = [];
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
          this.form?.controls['pageNumber'].patchValue(1, {emitEvent: false});
          this.loadAllUsers();
        });
  }

  ngOnInit(): void {
    this.initSearchForm();
    this.loadAllUsers();
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
    this.form.controls['pageNumber'].patchValue(pageNumber, {emitEvent: false});
    this.loadAllUsers();
  }

  private loadAllUsers() {
    let filters = this.form.getRawValue();
    console.log("filters", filters);

    this.httpService.GET(UsersController.Users, filters, true)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(res => {
          this.users = res?.data;
          this.total = res?.total;
        });
  }

  delete(item: any) {
    const modalRef = this.modalService.open(DeleteComponent, {
      ...ngbModalOptions,
      windowClass: 'modal modal-danger'
    });
    modalRef.componentInstance.data = item;

    modalRef.componentInstance.url = this.getDeleteUrl(item);
    modalRef
        .result
        .then((actionCompleted: boolean) => !actionCompleted || this.activeModal.close(true) || this.loadAllUsers())
        .catch(() => {
        });
  }

  activate(item: any) {
    const modalRef = this.modalService.open(ActivateComponent, {
      ...ngbModalOptions,
      windowClass: 'modal modal-success'
    });
    modalRef.componentInstance.data = item;
    modalRef.componentInstance.url = this.getActiveUrl(item);
    modalRef
        .result
        .then((actionCompleted: boolean) => !actionCompleted || this.activeModal.close(true) || this.loadAllUsers())
        .catch(() => {
        });
  }

  deactivate(item: any) {
    const modalRef = this.modalService.open(DeactivateComponent, {
      ...ngbModalOptions,
      windowClass: 'modal modal-danger'
    });
    modalRef.componentInstance.data = item;
    modalRef.componentInstance.url = this.getDeactiveUrl(item);
    modalRef
        .result
        .then((actionCompleted: boolean) => !actionCompleted || this.activeModal.close(true) || this.loadAllUsers())
        .catch(() => {
        });
  }

  getActiveUrl(item: any): string {
    if (item.role == UserRolesEnum.CommitteeMember)
      return CommitteeMembersController.Activate(item.id);

    if (item.role == UserRolesEnum.LocalAdmin)
      return UsersController.ActivateLocalAdmin(item.id);

    if (item.role == UserRolesEnum.Vendor)
      return VendorsController.Activate(item.id);
    else
      return PublicUserController.Activate(item.id);
  }

  getDeactiveUrl(item: any): string {
    if (item.role == UserRolesEnum.CommitteeMember)
      return CommitteeMembersController.Deactivate(item.id);

    if (item.role == UserRolesEnum.LocalAdmin)
      return UsersController.DeactivteLocalAdmin(item.id);

    if (item.role == UserRolesEnum.Vendor)
      return VendorsController.Deactivate(item.id);
    else
      return PublicUserController.Deactivate(item.id);
  }

  getDeleteUrl(item: any): string {
    if (item.role == UserRolesEnum.CommitteeMember)
      return CommitteeMembersController.Delete(item.id);

    if (item.role == UserRolesEnum.LocalAdmin)
      return UsersController.DeleteLocalAdmin(item.id);

    if (item.role == UserRolesEnum.Vendor)
      return VendorsController.Delete(item.id);
    else
      return PublicUserController.Delete(item.id);
  }
}


