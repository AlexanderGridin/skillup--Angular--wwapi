import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/user/user';
import { UsersStoreService } from 'src/app/services/users-store/users-store.service';
import { UserMapper } from 'src/app/mappers/UserMapper';
import { AddUserFormData } from 'src/app/interfaces/add-user-form-data';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit, OnDestroy {
  public modalTitle: string = 'Add user';
  public isModalVisible: boolean = false;
  public modalMinWidth: number = 250;
  public modalWidth: number = 991;

  public users!: User[];

  private getUsersSub!: Subscription;

  constructor(
    private usersStoreService: UsersStoreService,
    private userMapper: UserMapper
  ) {}

  public ngOnInit(): void {
    this.loadUsers();
  }

  private loadUsers(): void {
    this.usersStoreService.loadUsers();
    this.getUsersSub = this.usersStoreService.getUsers().subscribe({
      next: (loadedUsers: User[]): void => {
        this.users = loadedUsers;
      },
    });
  }

  public handleFormSubmit(userFormData: AddUserFormData | null): void {
    userFormData && this.addUser(userFormData);
  }

  private addUser(userFormData: AddUserFormData): void {
    this.usersStoreService.addUser(
      this.userMapper.createUserFromAddUserFormDataWithId(
        userFormData,
        this.calculateIdForNewUser()
      )
    );

    this.closeModal();
  }

  private calculateIdForNewUser(): number {
    return this.users.length === 0
      ? 1
      : this.users[this.users.length - 1].id + 1;
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
