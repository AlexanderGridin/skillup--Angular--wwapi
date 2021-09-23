import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { AddUserFormData } from 'src/app/interfaces/form-data/add-user-form-data';
import { User } from 'src/app/interfaces/user/user';
import { UsersStoreService } from 'src/app/services/users-store/users-store.service';

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit, OnDestroy {
  @Input() public user!: User;

  public modalTitle: string = 'Edit user';
  public isModalVisible: boolean = false;
  public modalMinWidth: number = 250;
  public modalWidth: number = 991;

  private getUsersSub!: Subscription;

  constructor(private usersStoreSerive: UsersStoreService) {}

  public ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void {
    this.getUsersSub = this.usersStoreSerive.getUsers().subscribe({
      next: this.closeModal.bind(this),
    });
  }

  public handleFormSubmit(userFormData: AddUserFormData | null): void {
    if (userFormData) {
      let updatedUser: User = {
        ...userFormData,
        id: this.user.id,
      };

      this.usersStoreSerive.updateUser(updatedUser);
    }
  }

  public showModal(): void {
    this.isModalVisible = true;
  }

  public closeModal(): void {
    this.isModalVisible = false;
  }

  public ngOnDestroy(): void {
    this.getUsersSub.unsubscribe();
  }
}
