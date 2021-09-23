import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CommentsStore } from 'src/app/interfaces/store/comments-store';
import { Comment } from 'src/app/interfaces/comment';

export namespace CommentsSelectors {
  export const store = createFeatureSelector<CommentsStore>('comments');

  export const getCommentsByPostId = (postId: number) =>
    createSelector(store, (store: CommentsStore): Comment[] | null => {
      if (!store.comments) {
        return null;
      }

      let commentsOfPost: Comment[] = store.comments.filter(
        (comment: Comment): boolean => comment.postId === postId
      );

      return commentsOfPost.length > 0 ? commentsOfPost : [];
    });
}
