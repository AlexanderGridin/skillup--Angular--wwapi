import { Action, createReducer, on } from '@ngrx/store';
import { UsersActions } from './users.actions';
import { UsersStore } from 'src/app/interfaces/store/users-store';
import { User } from 'src/app/interfaces/user/user';

const initalStore: UsersStore = {
  users: [],
};

const _usersReducer = createReducer(
  initalStore,
  on(
    UsersActions.addUserSuccess,
    (store: UsersStore, { user }: { user: User }): UsersStore => {
      const usersFromStore: User[] = [...store.users];
      const users: User[] = [...usersFromStore, user];

      return {
        ...store,
        users,
      };
    }
  ),

  on(
    UsersActions.loadUsersSuccess,
    (store: UsersStore, { users }: { users: User[] }): UsersStore => {
      return {
        ...store,
        users,
      };
    }
  )
);

export const usersReducer = (store: UsersStore | undefined, action: Action) =>
  _usersReducer(store, action);
