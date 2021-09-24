import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsersStoreService } from 'src/app/services/users-store/users-store.service';
import { AddUserFormData } from 'src/app/interfaces/form-data/add-user-form-data';
import { UserMapper } from 'src/app/mappers/UserMapper';

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

  private usersUpdatesSub!: Subscription;

  constructor(
    private usersStoreService: UsersStoreService,
    private userMapper: UserMapper
  ) {}

  public ngOnInit(): void {
    this.subscribeForUsersUpdates();
  }

  private subscribeForUsersUpdates(): void {
    this.usersUpdatesSub = this.usersStoreService.getUsers().subscribe({
      next: this.closeModal.bind(this),
    });
  }

  public handleFormSubmit(userFormData: AddUserFormData): void {
    this.addUser(userFormData);
  }

  private addUser(userFormData: AddUserFormData): void {
    this.usersStoreService.addUser(
      this.userMapper.prepareFofAdding(userFormData)
    );
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
