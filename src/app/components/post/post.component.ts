import { Component, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostsStoreService } from 'src/app/services/posts-store/posts-store.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  @Input() post!: Post;
  public isEditing: boolean = false;

  constructor(private postsStoreService: PostsStoreService) {}

  public editPost(): void {
    this.isEditing = true;
  }

  public removePost(): void {
    this.postsStoreService.removePostById(this.post.id);
  }
}
