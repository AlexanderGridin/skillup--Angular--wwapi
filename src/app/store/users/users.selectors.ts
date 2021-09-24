import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UsersStore } from 'src/app/interfaces/store/users-store';
import { EmptyUser } from 'src/app/interfaces/user/empty-user';
import { User } from 'src/app/interfaces/user/user';
import { EMPTY_USER } from 'src/app/constants/empty-user';

export namespace UsersSelectors {
  export const store = createFeatureSelector<UsersStore>('users');

  export const getUsers = createSelector(
    store,
    (store: UsersStore): User[] | null => (store.users ? store.users : null)
  );

  export const getUserById = (id: number) =>
    createSelector(store, (store: UsersStore): User | null => {
      if (!store.users) {
        return null;
      }

      let findedUser = store.users.find(
        (user: User): boolean => user.id === id
      );

      return findedUser ? findedUser : EMPTY_USER;
    });
}
