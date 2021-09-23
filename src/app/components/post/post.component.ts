import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostsStoreService } from 'src/app/services/posts-store/posts-store.service';
import { CommentsStoreService } from 'src/app/services/comments-store/comments-store.service';
import { Comment } from 'src/app/interfaces/comment';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post!: Post;
  public isEditing: boolean = false;

  public comments!: Comment[];
  public isShowComments: boolean = false;
  public commentsTogglerText: string = 'Show comments';

  constructor(
    private postsStoreService: PostsStoreService,
    private commetnsStoreService: CommentsStoreService
  ) {}

  public ngOnInit(): void {
    this.getComments();
  }

  public getComments(): void {
    this.commetnsStoreService.getCommentsByPostId(this.post.id).subscribe({
      next: (commentsFormStore: Comment[]): void => {
        commentsFormStore.length === 0
          ? this.commetnsStoreService.loadComments()
          : (this.comments = commentsFormStore);
      },
    });
  }

  public toggleCommentsVisibility(): void {
    this.isShowComments = !this.isShowComments;
    this.commentsTogglerText = this.isShowComments
      ? 'Hide comments'
      : 'Show comments';
  }

  public editPost(): void {
    this.isEditing = true;
  }

  public handlePostFormSubmit(updatedPost: Post): void {
    this.postsStoreService.updatePost(updatedPost);
  }

  public handlePostFormCancel(): void {
    this.isEditing = false;
  }

  public removePost(): void {
    this.postsStoreService.removePostById(this.post.id);
  }
}
