import { Component, OnInit, Input } from '@angular/core';
import { AddUserFormData } from 'src/app/interfaces/form-data/add-user-form-data';
import { User } from 'src/app/interfaces/user/user';

@Component({
  selector: 'edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  @Input() public user!: User;

  public modalTitle: string = 'Edit user';
  public isModalVisible: boolean = false;
  public modalMinWidth: number = 250;
  public modalWidth: number = 991;

  constructor() {}

  public ngOnInit(): void {}

  public handleFormSubmit(userFormData: AddUserFormData | null): void {
    // userFormData && this.addUser(userFormData);
  }

  public showModal(): void {
    this.isModalVisible = true;
  }

  public closeModal(): void {
    this.isModalVisible = false;
  }
}
