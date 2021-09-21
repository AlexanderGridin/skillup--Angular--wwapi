import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/interfaces/user/user';

export namespace UsersActions {
  export const addUser = createAction('ADD_USER', props<{ user: User }>());
  export const loadUsers = createAction('LOAD_USERS');
  export const loadUsersSuccess = createAction(
    'LOAD_USERS_SUCCESS',
    props<{ users: User[] }>()
  );
}
