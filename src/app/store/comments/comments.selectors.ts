import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CommentsStore } from 'src/app/interfaces/store/comments-store';
import { Comment } from 'src/app/interfaces/comment';

export namespace CommentsSelectors {
  export const store = createFeatureSelector<CommentsStore>('comments');

  export const getCommentsByPostId = (postId: number) =>
    createSelector(store, (store: CommentsStore): Comment[] =>
      store.comments.filter(
        (comment: Comment): boolean => comment.postId === postId
      )
    );
}
