import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Post } from 'src/app/interfaces/post';
import { PostFormData } from 'src/app/interfaces/form-data/post-form-data';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Input() public post!: Post;
  @Input() public submitButtonText: string = 'Submit';

  public form!: FormGroup;

  private titleFormControlInitalValue!: string;
  private bodyFormControlInitalValue!: string;

  @Output() private onSubmit: EventEmitter<PostFormData> =
    new EventEmitter<PostFormData>();
  @Output() private onCancel: EventEmitter<void> = new EventEmitter<void>();

  public ngOnInit(): void {
    this.initFormControlsInitialValues();
    this.initForm();
  }

  private initFormControlsInitialValues(): void {
    this.titleFormControlInitalValue = this.post ? this.post.title : '';
    this.bodyFormControlInitalValue = this.post ? this.post.body : '';
  }

  public initForm(): void {
    this.form = new FormGroup({
      title: new FormControl(this.titleFormControlInitalValue, [
        Validators.required,
      ]),
      body: new FormControl(this.bodyFormControlInitalValue, [
        Validators.required,
      ]),
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

  public handleFormCancel(): void {
    this.onCancel.emit();
  }
}
