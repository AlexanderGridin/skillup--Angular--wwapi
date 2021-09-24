import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { UsersActions } from 'src/app/store/users/users.actions';
import { UsersSelectors } from 'src/app/store/users/users.selectors';

import { User } from 'src/app/interfaces/user/user';
import { AddUserFormData } from 'src/app/interfaces/form-data/add-user-form-data';

@Injectable()
export class UsersStoreService {
  constructor(private store$: Store) {}

  public loadUsers(): void {
    this.store$.dispatch(UsersActions.loadUsers());
  }

  public getUsers(): Observable<User[] | null> {
    return this.store$.select(UsersSelectors.getUsers);
  }

  public addUser(userFormData: AddUserFormData): void {
    this.store$.dispatch(UsersActions.addUser({ userFormData }));
  }

  public updateUser(user: User): void {
    this.store$.dispatch(UsersActions.updateUser({ user }));
  }

  public getUserById(id: number): Observable<User | null> {
    return this.store$.select(UsersSelectors.getUserById(id));
  }

  public setCurrentUser(user: User): void {
    this.store$.dispatch(UsersActions.setCurrentUser({ user }));
  }

  public unsetCurrentUser(): void {
    this.store$.dispatch(UsersActions.unsetCurrentUser());
  }
}
