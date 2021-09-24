import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';

import { UsersStoreService } from 'src/app/services/users-store/users-store.service';

import { AddUserFormData } from 'src/app/interfaces/form-data/add-user-form-data';
import { User } from 'src/app/interfaces/user/user';

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

  private usersUpdatesSub!: Subscription;

  constructor(private usersStoreSerive: UsersStoreService) {}

  public ngOnInit(): void {
    this.subscribeForUsersUpdates();
  }

  private subscribeForUsersUpdates(): void {
    this.usersUpdatesSub = this.usersStoreSerive.getUsers().subscribe({
      next: this.closeModal.bind(this),
    });
  }

  public handleFormSubmit(userFormData: AddUserFormData): void {
    this.usersStoreSerive.updateUser(
      this.createUserFromUserFormData(userFormData)
    );
  }

  private createUserFromUserFormData(userFormData: AddUserFormData): User {
    return {
      ...userFormData,
      id: this.user.id,
    };
  }

  public showModal(): void {
    this.isModalVisible = true;
  }

  public closeModal(): void {
    this.isModalVisible = false;
  }

  public ngOnDestroy(): void {
    this.usersUpdatesSub.unsubscribe();
  }
}
