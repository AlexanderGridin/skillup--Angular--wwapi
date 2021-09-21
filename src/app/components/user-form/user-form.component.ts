import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user/user';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  @Input() private isEdit: boolean = false;
  @Input() public submitButtonText: string = 'Submit';
  @Input() public cancelButtonText: string = 'Cancel';

  public form!: FormGroup;

  public phoneFormControlMask: string = '+38(999) 00-00-000';

  @Output() private onFormCancel: EventEmitter<Event> =
    new EventEmitter<Event>();
  @Output() private onFormSubmit: EventEmitter<User | null> =
    new EventEmitter<User | null>();

  public ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.form = new FormGroup({
      userName: new FormControl('', [Validators.required]),

      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
      ]),

      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15),
      ]),

      email: new FormControl('', [Validators.required, Validators.email]),

      address: new FormGroup({
        street: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
        ]),

        building: new FormControl('', [Validators.required]),

        city: new FormControl('', [Validators.required]),

        zipcode: new FormControl('', [Validators.required]),
      }),

      phone: new FormControl('', [Validators.required]),

      website: new FormControl('', [Validators.required]),

      company: new FormGroup({
        name: new FormControl('', [Validators.required]),

        scope: new FormControl('', [Validators.required]),
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
    this.onFormSubmit.emit(null);
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
    this.onFormSubmit.emit(this.form.value);
  }

  public handleCancel(event: Event): void {
    this.onFormCancel.emit(event);
  }
}
