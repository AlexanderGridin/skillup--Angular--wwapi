import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/interfaces/post';
import { User } from 'src/app/interfaces/user/user';
import { PostsStoreService } from 'src/app/services/posts-store/posts-store.service';

@Component({
  selector: 'user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css'],
})
export class UserPostsComponent implements OnInit {
  @Input() public user!: User;
  public posts!: Post[];

  constructor(private postsStoreService: PostsStoreService) {}

  public ngOnInit(): void {
    this.loadPosts();
  }

  public loadPosts(): void {
    this.postsStoreService.getPosts().subscribe({
      next: (posts: Post[]): void => {
        posts.length === 0
          ? this.postsStoreService.loadPosts()
          : this.getPostsOfUser();
      },
    });
  }

  public getPostsOfUser(): void {
    this.user &&
      this.postsStoreService.getPostsByUserId(this.user.id).subscribe({
        next: (posts: Post[]): void => {
          this.posts = posts;
        },
      });
  }
}
