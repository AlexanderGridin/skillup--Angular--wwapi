import { Component, Input, Output, EventEmitter } from '@angular/core';

import { PostsStoreService } from 'src/app/services/posts-store/posts-store.service';

import { PostFormData } from 'src/app/interfaces/form-data/post-form-data';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent {
  @Input() public post!: Post;

  @Output() public onEditingCancelled: EventEmitter<void> =
    new EventEmitter<void>();

  constructor(private postsStoreService: PostsStoreService) {}

  public handlePostFormSubmit(postFormData: PostFormData): void {
    this.postsStoreService.updatePost(
      this.createPostFromFormData(postFormData)
    );
  }

  private createPostFromFormData(postFormData: PostFormData): Post {
    return {
      ...postFormData,
      userId: this.post.userId,
      id: this.post.id,
    };
  }

  public handlePostFormCancel(): void {
    this.onEditingCancelled.emit();
  }
}
