import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UsersStore } from 'src/app/interfaces/store/users-store';
import { User } from 'src/app/interfaces/user/user';

export namespace UsersSelectors {
  export const store = createFeatureSelector<UsersStore>('users');

  export const getUsers = createSelector(
    store,
    (store: UsersStore): User[] => store.users
  );

  export const getUserById = (id: number) =>
    createSelector(store, (store: UsersStore): User | undefined =>
      store.users.find((user: User): boolean => user.id === id)
    );
}
