import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { PostsActions } from 'src/app/store/posts/posts.actions';
import { PostsSelectors } from 'src/app/store/posts/posts.selectors';

@Injectable()
export class PostsStoreService {
  constructor(private store$: Store) {}

  public loadPosts(): void {
    this.store$.dispatch(PostsActions.loadPosts());
  }

  public getPosts(): Observable<Post[]> {
    return this.store$.select(PostsSelectors.getPosts);
  }

  public getPostsByUserId(userId: number): Observable<Post[]> {
    return this.store$.select(PostsSelectors.getPostsByUserId(userId));
  }
}
