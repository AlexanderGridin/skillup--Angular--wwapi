import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostsActions } from './posts.actions';
import { map, mergeMap } from 'rxjs/operators';
import { LocalApiService } from 'src/app/services/local-api/local-api.service';
import { Post } from 'src/app/interfaces/post';

@Injectable()
export class PostsEffects {
  public loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.loadPosts),
      mergeMap(() =>
        this.localApiSerivce
          .getPosts()
          .pipe(
            map((posts: Post[]) => PostsActions.loadPostsSuccess({ posts }))
          )
      )
    )
  );

  public removePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.removePostById),
      mergeMap((action) =>
        this.localApiSerivce
          .removePostById(action.postId)
          .pipe(map(() => PostsActions.loadPosts()))
      )
    )
  );

  public updatePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PostsActions.updatePost),
      mergeMap((action) =>
        this.localApiSerivce
          .updatePost(action.post)
          .pipe(map((post) => PostsActions.updatePostSuccess({ post })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private localApiSerivce: LocalApiService
  ) {}
}
