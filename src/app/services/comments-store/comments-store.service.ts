import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { CommentsActions } from 'src/app/store/comments/comments.actions';
import { CommentsSelectors } from 'src/app/store/comments/comments.selectors';

import { Comment } from 'src/app/interfaces/comment';

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
