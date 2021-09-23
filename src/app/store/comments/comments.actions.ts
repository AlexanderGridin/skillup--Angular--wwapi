import { createAction, props } from '@ngrx/store';
import { Comment } from 'src/app/interfaces/comment';

export namespace CommentsActions {
  export const loadComments = createAction('LOAD_COMMENTS');
  export const loadCommentsSuccess = createAction(
    'LOAD_COMMENTS_SUCCESS',
    props<{ comments: Comment[] }>()
  );
}
