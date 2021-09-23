import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { PostsStoreService } from 'src/app/services/posts-store/posts-store.service';
import { CommentsStoreService } from 'src/app/services/comments-store/comments-store.service';
import { Comment } from 'src/app/interfaces/comment';
import { PostFormData } from 'src/app/interfaces/form-data/post-form-data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit, OnDestroy {
  @Input() post!: Post;
  public isEditing: boolean = false;

  public comments!: Comment[];
  public isCommentsVisible: boolean = false;
  public commentsVisibilityTogglerText: string = 'Show comments';

  private getCommentsSub!: Subscription;

  constructor(
    private postsStoreService: PostsStoreService,
    private commetnsStoreService: CommentsStoreService
  ) {}

  public ngOnInit(): void {
    this.getComments();
  }

  public getComments(): void {
    this.getCommentsSub = this.commetnsStoreService
      .getCommentsByPostId(this.post.id)
      .subscribe({
        next: this.processCommentsOfPostFromStore.bind(this),
      });
  }

  public processCommentsOfPostFromStore(
    commentsFormStore: Comment[] | null
  ): void {
    commentsFormStore
      ? (this.comments = commentsFormStore)
      : this.commetnsStoreService.loadComments();
  }

  public toggleCommentsVisibility(): void {
    this.isCommentsVisible = !this.isCommentsVisible;
    this.commentsVisibilityTogglerText = this.isCommentsVisible
      ? 'Hide comments'
      : 'Show comments';
  }

  public editPost(): void {
    this.isEditing = true;
  }

  public handlePostFormSubmit(updatedPost: Post | PostFormData): void {
    this.postsStoreService.updatePost(updatedPost as Post);
  }

  public handlePostFormCancel(): void {
    this.isEditing = false;
  }

  public removePost(): void {
    this.postsStoreService.removePostById(this.post.id);
  }

  public ngOnDestroy(): void {
    this.getCommentsSub.unsubscribe();
  }
}
