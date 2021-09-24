import { Action, createReducer, on } from '@ngrx/store';
import { UsersActions } from './users.actions';
import { UsersStore } from 'src/app/interfaces/store/users-store';
import { User } from 'src/app/interfaces/user/user';
import { EmptyUser } from 'src/app/interfaces/user/empty-user';

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
    (store: UsersStore, { user }: { user: User | EmptyUser }): UsersStore => {
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
  }),

  on(
    UsersActions.updateUserSuccess,
    (store: UsersStore, { user }: { user: User }): UsersStore => {
      if (!store.users) {
        return {
          ...store,
        };
      }

      let usersFromStore: User[] = [...store.users];
      let users = usersFromStore.map(
        (userFromStore: User): User =>
          userFromStore.id === user.id ? user : userFromStore
      );

      return {
        ...store,
        users,
      };
    }
  )
);

export const usersReducer = (store: UsersStore | undefined, action: Action) =>
  _usersReducer(store, action);
