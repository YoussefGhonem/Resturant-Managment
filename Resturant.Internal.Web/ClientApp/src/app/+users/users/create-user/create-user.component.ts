import { takeUntil } from 'rxjs/operators';
import { Component, Injector, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from '@shared/base/base.component';
import { UserRolesEnum, } from 'app/+users/models/index';
import { UsersController, VendorsController } from 'app/+users/controllers/index';
import { UsersValidator } from 'app/+users/validators/user.validator';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent extends BaseComponent implements OnInit {
  form: FormGroup;
  userRolesEnum = UserRolesEnum;
  @Input('role') role?: UserRolesEnum;

  constructor(public override injector: Injector, public modalService: NgbActiveModal,
              private formBuilder: FormBuilder) {
    super(injector);
  }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.formBuilder.group({
      firstName: new FormControl(null, UsersValidator.firstName),
      lastName: new FormControl(null, UsersValidator.lastName),
      phoneNumber: new FormControl(null, UsersValidator.phoneNumber),
      email: new FormControl(null, UsersValidator.email),
    });
  }

  isInvalid(controllerName: string): boolean {
    return this.form.get(controllerName).errors && this.form.touched;
  }

  getUrl(): string {
    if (this.role == this.userRolesEnum.Vendor) {
      return VendorsController.Create
    } else {
      return UsersController.LocalAdmins
    }
  }

  submit() {
    let body = this.form.getRawValue();
    let isIdentity = this.role == this.userRolesEnum.Vendor ? true : false;
    this.httpService.POST(this.getUrl(), body, undefined, isIdentity)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe(res => {
          this.modalService.close(true);
          this.notificationService.success('Create User', 'Your changes successfully updated! 🎉');
        });
  }

}
