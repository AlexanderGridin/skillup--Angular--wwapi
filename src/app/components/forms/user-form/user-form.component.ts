import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user/user';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  @Input() public user!: User;
  @Input() public submitButtonText: string = 'Submit';
  @Input() public cancelButtonText: string = 'Cancel';

  public form!: FormGroup;

  private usernameFormControlInitialValue!: string;
  private firstNameFormControlInitialvalue!: string;
  private lastNameFormControlInitialValue!: string;
  private emailFormControlInitialValue!: string;
  private streetFromControlInitialValue!: string;
  private buildingFormControlInitialValue!: string;
  private cityFormControlInitialValue!: string;
  private zipcodeFormControlInitialValue!: string;
  private phoneFormControlInitialValue!: string;
  private websiteFormControlInitialValue!: string;
  private companyNameFormControlInitialValue!: string;
  private companyScopeFormControlInitialValue!: string;

  public phoneFormControlMask: string = '+38(999) 00-00-000';

  @Output() private onSubmit: EventEmitter<User> = new EventEmitter<User>();
  @Output() private onCancel: EventEmitter<void> = new EventEmitter<void>();

  public ngOnInit(): void {
    this.initFormControlsInitialValues();
    this.initForm();
  }

  public initFormControlsInitialValues(): void {
    this.usernameFormControlInitialValue = this.user ? this.user.username : '';
    this.firstNameFormControlInitialvalue = this.user
      ? this.user.firstName
      : '';
    this.lastNameFormControlInitialValue = this.user ? this.user.lastName : '';
    this.emailFormControlInitialValue = this.user ? this.user.email : '';
    this.streetFromControlInitialValue = this.user
      ? this.user.address.street
      : '';
    this.buildingFormControlInitialValue = this.user
      ? this.user.address.building
      : '';
    this.cityFormControlInitialValue = this.user ? this.user.address.city : '';
    this.zipcodeFormControlInitialValue = this.user
      ? this.user.address.zipcode
      : '';
    this.phoneFormControlInitialValue = this.user ? this.user.phone : '';
    this.websiteFormControlInitialValue = this.user ? this.user.website : '';
    this.companyNameFormControlInitialValue = this.user
      ? this.user.company.name
      : '';
    this.companyScopeFormControlInitialValue = this.user
      ? this.user.company.scope
      : '';
  }

  public initForm(): void {
    this.form = new FormGroup({
      username: new FormControl(this.usernameFormControlInitialValue, [
        Validators.required,
      ]),

      firstName: new FormControl(this.firstNameFormControlInitialvalue, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
      ]),

      lastName: new FormControl(this.lastNameFormControlInitialValue, [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
      ]),

      email: new FormControl(this.emailFormControlInitialValue, [
        Validators.required,
        Validators.email,
      ]),

      address: new FormGroup({
        street: new FormControl(this.streetFromControlInitialValue, [
          Validators.required,
          Validators.minLength(5),
        ]),

        building: new FormControl(this.buildingFormControlInitialValue, [
          Validators.required,
        ]),

        city: new FormControl(this.cityFormControlInitialValue, [
          Validators.required,
        ]),

        zipcode: new FormControl(this.zipcodeFormControlInitialValue, [
          Validators.required,
        ]),
      }),

      phone: new FormControl(this.phoneFormControlInitialValue, [
        Validators.required,
      ]),

      website: new FormControl(this.websiteFormControlInitialValue, [
        Validators.required,
      ]),

      company: new FormGroup({
        name: new FormControl(this.companyNameFormControlInitialValue, [
          Validators.required,
        ]),

        scope: new FormControl(this.companyScopeFormControlInitialValue, [
          Validators.required,
        ]),
      }),
    });
  }

  public handleFormSubmit(): void {
    this.form.invalid
      ? this.handleFormInvalidStatus()
      : this.handleFormValidStatus();
  }

  private handleFormInvalidStatus(): void {
    this.markAllInvalidControlsAsTouchedOf(this.form);
  }

  private markAllInvalidControlsAsTouchedOf(formGroup: FormGroup): void {
    if (!formGroup.controls) {
      return;
    }

    for (let controlKey in formGroup.controls) {
      let control: FormGroup = formGroup.controls[controlKey] as FormGroup;

      if (control.controls) {
        this.markAllInvalidControlsAsTouchedOf(control);
      }

      formGroup.controls[controlKey].invalid &&
        formGroup.controls[controlKey].markAsTouched();
    }
  }

  private handleFormValidStatus(): void {
    this.onSubmit.emit(this.form.value);
  }

  public handleCancel(): void {
    this.onCancel.emit();
  }
}
