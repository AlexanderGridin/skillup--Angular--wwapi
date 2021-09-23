import { Component, OnInit } from '@angular/core';
import { PostFormData } from 'src/app/interfaces/form-data/post-form-data';

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  public modalTitle: string = 'Add post';
  public isModalVisible: boolean = false;
  public modalMinWidth: number = 250;
  public modalWidth: number = 450;

  constructor() {}

  public ngOnInit(): void {}

  public handleFormSubmit(postFormData: PostFormData): void {
    console.log(postFormData);
    this.closeModal();
  }

  public showModal(): void {
    this.isModalVisible = true;
  }

  public closeModal(): void {
    this.isModalVisible = false;
  }
}
