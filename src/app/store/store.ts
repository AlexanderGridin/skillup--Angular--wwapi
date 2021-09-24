import { commentsReducer } from './comments/comments.reducer';
import { postsReducer } from './posts/posts.reducer';
import { usersReducer } from './users/users.reducer';

export const STORE = {
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
};
