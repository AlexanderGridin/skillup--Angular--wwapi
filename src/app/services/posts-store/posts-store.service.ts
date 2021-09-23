import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { PostsActions } from 'src/app/store/posts/posts.actions';
import { PostsSelectors } from 'src/app/store/posts/posts.selectors';
import { PostDTO } from 'src/app/interfaces/post-dto';

@Injectable()
export class PostsStoreService {
  constructor(private store$: Store) {}

  public loadPosts(): void {
    this.store$.dispatch(PostsActions.loadPosts());
  }

  public getPosts(): Observable<Post[] | null> {
    return this.store$.select(PostsSelectors.getPosts);
  }

  public getPostsByUserId(userId: number): Observable<Post[] | null> {
    return this.store$.select(PostsSelectors.getPostsByUserId(userId));
  }

  public removePostById(postId: number): void {
    this.store$.dispatch(PostsActions.removePostById({ postId }));
  }

  public updatePost(post: Post): void {
    this.store$.dispatch(PostsActions.updatePost({ post }));
  }

  public addPost(post: PostDTO): void {
    this.store$.dispatch(PostsActions.addPost({ post }));
  }
}
