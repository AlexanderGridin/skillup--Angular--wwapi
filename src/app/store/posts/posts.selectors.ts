import { createSelector, createFeatureSelector } from '@ngrx/store';
import { PostsStore } from 'src/app/interfaces/store/posts-store';
import { Post } from 'src/app/interfaces/post';

export namespace PostsSelectors {
  export const store = createFeatureSelector<PostsStore>('posts');

  export const getPosts = createSelector(
    store,
    (store: PostsStore): Post[] | null => (store.posts ? store.posts : null)
  );

  export const getPostsByUserId = (userId: number) =>
    createSelector(store, (store: PostsStore): Post[] | null => {
      if (!store.posts) {
        return null;
      }

      let findedPosts: Post[] = store.posts.filter(
        (post: Post): boolean => post.userId === userId
      );

      return findedPosts.length > 0 ? findedPosts : null;
    });
}
