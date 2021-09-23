import { Action, createReducer, on } from '@ngrx/store';
import { UsersActions } from './users.actions';
import { UsersStore } from 'src/app/interfaces/store/users-store';
import { User } from 'src/app/interfaces/user/user';

const initalStore: UsersStore = {
  users: null,
  currentUser: null,
};

const _usersReducer = createReducer(
  initalStore,
  on(
    UsersActions.addUserSuccess,
    (store: UsersStore, { user }: { user: User }): UsersStore => {
      if (!store.users) {
        return {
          ...store,
        };
      }

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
  ),

  on(
    UsersActions.setCurrentUser,
    (store: UsersStore, { user }: { user: User }): UsersStore => {
      return {
        ...store,
        currentUser: user,
      };
    }
  ),

  on(UsersActions.unsetCurrentUser, (store: UsersStore): UsersStore => {
    return {
      ...store,
      currentUser: null,
    };
  })
);

export const usersReducer = (store: UsersStore | undefined, action: Action) =>
  _usersReducer(store, action);
