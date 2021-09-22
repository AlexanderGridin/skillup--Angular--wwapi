import { Action, createReducer, on } from '@ngrx/store';
import { PostsActions } from './posts.actions';
import { PostsStore } from 'src/app/interfaces/store/posts-store';
import { Post } from 'src/app/interfaces/post';

const initialStore: PostsStore = {
  posts: [],
};

const _postsReducer = createReducer(
  initialStore,
  on(
    PostsActions.loadPostsSuccess,
    (store: PostsStore, { posts }: { posts: Post[] }): PostsStore => {
      return {
        ...store,
        posts,
      };
    }
  )
);

export const postsReducer = (store: PostsStore | undefined, action: Action) =>
  _postsReducer(store, action);
