import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  public form!: FormGroup;

  constructor() {}

  public ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
    });
  }

  public handleFormSubmit(): void {
    console.log(this.form.value);
  }
}
