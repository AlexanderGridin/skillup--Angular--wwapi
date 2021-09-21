import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user/user';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  public modalTitle: string = 'Add user';
  public isModalVisible: boolean = false;
  public modalMinWidth: number = 250;
  public modalWidth: number = 991;

  constructor() {}

  ngOnInit(): void {}

  public showModal(): void {
    this.isModalVisible = true;
  }

  public closeModal(): void {
    this.isModalVisible = false;
  }

  public handleFormSubmit(user: User | null): void {
    console.log(user);
  }
}
