import { PostsEffects } from './posts/posts.effects';
import { UsersEffects } from './users/users.effects';
import { CommentsEffects } from './comments/comments.effects';

export const EFFECTS = [UsersEffects, PostsEffects, CommentsEffects];
