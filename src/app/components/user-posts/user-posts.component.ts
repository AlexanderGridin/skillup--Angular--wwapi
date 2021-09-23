import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/interfaces/post';
import { User } from 'src/app/interfaces/user/user';
import { PostsStoreService } from 'src/app/services/posts-store/posts-store.service';

@Component({
  selector: 'user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css'],
})
export class UserPostsComponent implements OnInit, OnDestroy {
  @Input() public user!: User;
  public posts!: Post[];

  private getPostsSub!: Subscription;
  private getPostsOfUserSub!: Subscription;

  constructor(private postsStoreService: PostsStoreService) {}

  public ngOnInit(): void {
    this.getPosts();
  }

  public getPosts(): void {
    this.getPostsSub = this.postsStoreService.getPosts().subscribe({
      next: this.processReceivedPostsFromStore.bind(this),
    });
  }

  public processReceivedPostsFromStore(posts: Post[] | null): void {
    posts ? this.getPostsOfUser() : this.postsStoreService.loadPosts();
  }

  public getPostsOfUser(): void {
    if (this.user) {
      this.getPostsOfUserSub = this.postsStoreService
        .getPostsByUserId(this.user.id)
        .subscribe({
          next: this.processReceivedPostsOfUserFromStore.bind(this),
        });
    }
  }

  public processReceivedPostsOfUserFromStore(posts: Post[] | null): void {
    posts ? (this.posts = posts) : (this.posts = []);
  }

  public ngOnDestroy(): void {
    this.getPostsSub.unsubscribe();
    this.getPostsOfUserSub.unsubscribe();
  }
}
