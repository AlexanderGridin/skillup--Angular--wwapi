import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/interfaces/user/user';
import { AddUserFormData } from 'src/app/interfaces/form-data/add-user-form-data';

export namespace UsersActions {
  export const addUser = createAction(
    'ADD_USER',
    props<{ userFormData: AddUserFormData }>()
  );
  export const addUserSuccess = createAction(
    'ADD_USER_SUCCESS',
    props<{ user: User }>()
  );

  export const loadUsers = createAction('LOAD_USERS');
  export const loadUsersSuccess = createAction(
    'LOAD_USERS_SUCCESS',
    props<{ users: User[] }>()
  );
}
