import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/interfaces/post';

export namespace PostsActions {
  export const loadPosts = createAction('LOAD_POSTS');
  export const loadPostsSuccess = createAction(
    'LOAD_POSTS_SUCCESS',
    props<{ posts: Post[] }>()
  );

  export const removePostById = createAction(
    'REMOVE_POST_BY_ID',
    props<{ postId: number }>()
  );
}
