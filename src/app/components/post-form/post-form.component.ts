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

  private titleFormControlInitalValue!: string;
  private bodyFormControlInitalValue!: string;

  public form!: FormGroup;

  @Output() private onSubmit: EventEmitter<Post | PostFormData> =
    new EventEmitter<Post | PostFormData>();
  @Output() private onCancel: EventEmitter<Event> = new EventEmitter<Event>();

  constructor() {}

  public ngOnInit(): void {
    this.titleFormControlInitalValue = this.post ? this.post.title : '';
    this.bodyFormControlInitalValue = this.post ? this.post.body : '';

    this.initForm();
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
    if (this.post) {
      let updatedPost: Post = {
        ...this.form.value,
        userId: this.post.userId,
        id: this.post.id,
      };

      this.onSubmit.emit(updatedPost);
    } else {
      this.onSubmit.emit(this.form.value);
    }
  }

  public handleFormCancel(event: Event): void {
    this.onCancel.emit(event);
  }
}
