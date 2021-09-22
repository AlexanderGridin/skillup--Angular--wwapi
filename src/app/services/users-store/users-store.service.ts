import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user/user';
import { UsersActions } from 'src/app/store/users/users.actions';
import { UsersSelectors } from 'src/app/store/users/users.selectors';
import { AddUserFormData } from 'src/app/interfaces/add-user-form-data';

@Injectable()
export class UsersStoreService {
  constructor(private store$: Store) {}

  public loadUsers(): void {
    this.store$.dispatch(UsersActions.loadUsers());
  }

  public getUsers(): Observable<User[]> {
    return this.store$.select(UsersSelectors.getUsers);
  }

  public addUser(userFormData: AddUserFormData): void {
    this.store$.dispatch(UsersActions.addUser({ userFormData }));
  }
}
