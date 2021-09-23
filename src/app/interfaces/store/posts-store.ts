import { Post } from '../post';

export interface PostsStore {
  posts: Post[] | null;
}
