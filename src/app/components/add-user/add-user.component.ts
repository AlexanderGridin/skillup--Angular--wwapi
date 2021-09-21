import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  public modalTitle: string = 'Add user';

  constructor() {}

  ngOnInit(): void {}
}
