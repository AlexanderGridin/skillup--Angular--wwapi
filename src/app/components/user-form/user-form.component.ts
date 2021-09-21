import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
})
export class UserFormComponent implements OnInit {
  @Input() private isEdit: boolean = false;

  public form!: FormGroup;

  constructor() {}

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

      email: new FormControl('', [Validators.email]),

      address: new FormGroup({
        street: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
        ]),

        building: new FormControl('', [Validators.required]),

        city: new FormControl('', [Validators.required]),

        zipcode: new FormControl('', [Validators.required]),
      }),

      phone: new FormControl('', Validators.pattern('[- +()0-9]+')),

      website: new FormControl('', [Validators.required]),

      company: new FormGroup({
        name: new FormControl('', [Validators.required]),

        scope: new FormControl('', [Validators.required]),
      }),
    });
  }

  public handleFormSubmit(): void {
    console.log(this.form.controls);
  }
}
