import { createAction, props } from '@ngrx/store';
import { Post } from 'src/app/interfaces/post';
import { PostDTO } from 'src/app/interfaces/post-dto';

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

  export const updatePost = createAction(
    'UPDATE_POST',
    props<{ post: Post }>()
  );
  export const updatePostSuccess = createAction(
    'UPDATE_POST_SUCCESS',
    props<{ post: Post }>()
  );

  export const addPost = createAction('ADD_POST', props<{ post: PostDTO }>());
  export const addPostSuccess = createAction(
    'ADD_POST_SUCCESS',
    props<{ post: Post }>()
  );
}
