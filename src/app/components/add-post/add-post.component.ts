import { Component, OnInit, Input } from '@angular/core';
import { PostFormData } from 'src/app/interfaces/form-data/post-form-data';
import { User } from 'src/app/interfaces/user/user';
import { PostDTO } from 'src/app/interfaces/post-dto';
import { PostsStoreService } from 'src/app/services/posts-store/posts-store.service';

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  @Input() public user!: User;

  public modalTitle: string = 'Add post';
  public isModalVisible: boolean = false;
  public modalMinWidth: number = 250;
  public modalWidth: number = 450;

  constructor(private postsStoreService: PostsStoreService) {}

  public ngOnInit(): void {}

  public handleFormSubmit(postFormData: PostFormData): void {
    let postDTO: PostDTO = {
      ...postFormData,
      userId: this.user.id,
    };

    this.postsStoreService.addPost(postDTO);
    console.log(postDTO);

    // this.closeModal();
  }

  public showModal(): void {
    this.isModalVisible = true;
  }

  public closeModal(): void {
    this.isModalVisible = false;
  }
}
