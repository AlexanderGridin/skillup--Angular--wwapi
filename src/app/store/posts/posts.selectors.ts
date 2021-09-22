import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PostsStore } from 'src/app/interfaces/store/posts-store';
import { Post } from 'src/app/interfaces/post';

export namespace PostsSelectors {
  export const store = createFeatureSelector<PostsStore>('posts');

  export const getPosts = createSelector(
    store,
    (store: PostsStore): Post[] => store.posts
  );

  export const getPostsByUserId = (userId: number) =>
    createSelector(store, (store: PostsStore): Post[] =>
      store.posts.filter((post: Post) => post.userId === userId)
    );
}
