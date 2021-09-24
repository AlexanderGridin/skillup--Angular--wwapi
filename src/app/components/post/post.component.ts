import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PostsStoreService } from 'src/app/services/posts-store/posts-store.service';
import { CommentsStoreService } from 'src/app/services/comments-store/comments-store.service';

import { Post } from 'src/app/interfaces/post';
import { Comment } from 'src/app/interfaces/comment';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit, OnDestroy {
  @Input() post!: Post;

  public comments!: Comment[];

  public isEditing: boolean = false;
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

  private getComments(): void {
    this.getCommentsSub = this.commetnsStoreService
      .getCommentsByPostId(this.post.id)
      .subscribe({
        next: this.processCommentsOfPostFromStore.bind(this),
      });
  }

  private processCommentsOfPostFromStore(
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

  public handleEditingCancelation(): void {
    this.isEditing = false;
  }

  public removePost(): void {
    this.postsStoreService.removePostById(this.post.id);
  }

  public ngOnDestroy(): void {
    this.getCommentsSub.unsubscribe();
  }
}
