import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/user/user';
import { UsersActions } from 'src/app/store/users/users.actions';
import { UsersSelectors } from 'src/app/store/users/users.selectors';

@Injectable()
export class UsersStoreService {
  constructor(private store$: Store) {}

  public loadUsers(): void {
    this.store$.dispatch(UsersActions.loadUsers());
  }

  public getUsers(): Observable<User[]> {
    return this.store$.select(UsersSelectors.getUsers);
  }
}
