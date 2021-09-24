import { Action, createReducer, on } from '@ngrx/store';
import { PostsActions } from './posts.actions';
import { PostsStore } from 'src/app/interfaces/store/posts-store';
import { Post } from 'src/app/interfaces/post';

const initialStore: PostsStore = {
  posts: null,
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
  ),

  on(
    PostsActions.updatePostSuccess,
    (store: PostsStore, { post }: { post: Post }): PostsStore => {
      if (!store.posts) {
        return {
          ...store,
        };
      }

      let postsFromStore: Post[] = [...store.posts];
      let posts: Post[] = postsFromStore.map(
        (postFromStore: Post): Post =>
          postFromStore.id === post.id ? post : postFromStore
      );

      return {
        ...store,
        posts,
      };
    }
  ),

  on(
    PostsActions.addPostSuccess,
    (store: PostsStore, { post }: { post: Post }): PostsStore => {
      if (!store.posts) {
        return {
          ...store,
        };
      }

      let postsFromStore: Post[] = [...store.posts];
      let posts = [...postsFromStore, post];

      return {
        ...store,
        posts,
      };
    }
  )
);

export const postsReducer = (store: PostsStore | undefined, action: Action) =>
  _postsReducer(store, action);
