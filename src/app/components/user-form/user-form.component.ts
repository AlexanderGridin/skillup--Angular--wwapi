import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  @Input() private isEdit: boolean = false;

  public form!: FormGroup;

  public phoneFormControlMask: string = '+38(999) 00-00-000';

  @Output() private onFormCancel: EventEmitter<Event> =
    new EventEmitter<Event>();

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

    console.log(this.form);
  }

  private handleFormInvalidStatus(): void {
    this.markAllInvalidControlsAsTouchedOf(this.form);
    console.log('form invalid');
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

  private handleFormValidStatus(): void {}

  public handleCancel(event: Event): void {
    this.onFormCancel.emit(event);
  }
}
