import { EmptyUser } from '../user/empty-user';
import { User } from '../user/user';

export interface UsersStore {
  users: User[] | null;
  currentUser: User | EmptyUser | null;
}
