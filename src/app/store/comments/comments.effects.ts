import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CommentsActions } from './comments.actions';
import { map, mergeMap } from 'rxjs/operators';
import { LocalApiService } from 'src/app/services/local-api/local-api.service';
import { Comment } from 'src/app/interfaces/comment';

@Injectable()
export class CommentsEffects {
  public loadComments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CommentsActions.loadComments),
      mergeMap(() =>
        this.localApiService
          .getComments()
          .pipe(
            map((comments: Comment[]) =>
              CommentsActions.loadCommentsSuccess({ comments })
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private localApiService: LocalApiService
  ) {}
}
