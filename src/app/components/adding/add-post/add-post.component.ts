import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PostFormData } from 'src/app/interfaces/form-data/post-form-data';
import { User } from 'src/app/interfaces/user/user';
import { PostDTO } from 'src/app/interfaces/post-dto';
import { PostsStoreService } from 'src/app/services/posts-store/posts-store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit, OnDestroy {
  @Input() public user!: User;

  public modalTitle: string = 'Add post';
  public isModalVisible: boolean = false;
  public modalMinWidth: number = 250;
  public modalWidth: number = 450;

  private getPostsSub!: Subscription;

  constructor(private postsStoreService: PostsStoreService) {}

  public ngOnInit(): void {
    this.getPosts();
  }

  private getPosts(): void {
    this.getPostsSub = this.postsStoreService.getPosts().subscribe({
      next: this.closeModal.bind(this),
    });
  }

  public handleFormSubmit(postFormData: PostFormData): void {
    this.postsStoreService.addPost(
      this.createPostDTOFromPostFormData(postFormData)
    );
  }

  private createPostDTOFromPostFormData(postFormData: PostFormData): PostDTO {
    return {
      ...postFormData,
      userId: this.user.id,
    };
  }

  public showModal(): void {
    this.isModalVisible = true;
  }

  public closeModal(): void {
    this.isModalVisible = false;
  }

  public ngOnDestroy(): void {
    this.getPostsSub.unsubscribe();
  }
}
