import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { UsersActions } from './users.actions';
import { map, mergeMap } from 'rxjs/operators';
import { LocalApiService } from 'src/app/services/local-api/local-api.service';

@Injectable()
export class UsersEffects {
  public loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUsers),
      mergeMap(() =>
        this.localApiService
          .getUsers()
          .pipe(map((users) => UsersActions.loadUsersSuccess({ users })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private localApiService: LocalApiService
  ) {}
}
