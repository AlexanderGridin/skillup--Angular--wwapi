import { Component } from '@angular/core';
import { UsersStoreService } from 'src/app/services/users-store/users-store.service';
import { AddUserFormData } from 'src/app/interfaces/add-user-form-data';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  public modalTitle: string = 'Add user';
  public isModalVisible: boolean = false;
  public modalMinWidth: number = 250;
  public modalWidth: number = 991;

  constructor(private usersStoreService: UsersStoreService) {}

  public handleFormSubmit(userFormData: AddUserFormData | null): void {
    userFormData && this.addUser(userFormData);
  }

  private addUser(userFormData: AddUserFormData): void {
    this.usersStoreService.addUser(userFormData);
    this.closeModal();
  }

  public showModal(): void {
    this.isModalVisible = true;
  }

  public closeModal(): void {
    this.isModalVisible = false;
  }
}
