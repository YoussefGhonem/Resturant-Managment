import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationPasswordOptionsComponent } from './validation-password-options.component';

describe('ValidationPasswordOptionsComponent', () => {
  let component: ValidationPasswordOptionsComponent;
  let fixture: ComponentFixture<ValidationPasswordOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationPasswordOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationPasswordOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
