import { User } from '../user/user';

export interface UsersStore {
  users: User[] | null;
  currentUser: User | null;
}
