import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommentsActions } from 'src/app/store/comments/comments.actions';
import { Comment } from 'src/app/interfaces/comment';
import { CommentsSelectors } from 'src/app/store/comments/comments.selectors';

@Injectable()
export class CommentsStoreService {
  constructor(private store$: Store) {}

  public loadComments(): void {
    this.store$.dispatch(CommentsActions.loadComments());
  }

  public getCommentsByPostId(postId: number): Observable<Comment[] | null> {
    return this.store$.select(CommentsSelectors.getCommentsByPostId(postId));
  }
}
