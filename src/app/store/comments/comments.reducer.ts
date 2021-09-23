import { Action, createReducer, on, Store } from '@ngrx/store';
import { CommentsActions } from './comments.actions';
import { CommentsStore } from 'src/app/interfaces/store/comments-store';
import { Comment } from 'src/app/interfaces/comment';

const initialStore: CommentsStore = {
  comments: [],
};

const _commentsReducer = createReducer(
  initialStore,
  on(
    CommentsActions.loadCommentsSuccess,
    (
      store: CommentsStore,
      { comments }: { comments: Comment[] }
    ): CommentsStore => {
      return {
        ...store,
        comments,
      };
    }
  )
);

export const commentsReducer = (
  store: CommentsStore | undefined,
  action: Action
) => _commentsReducer(store, action);
