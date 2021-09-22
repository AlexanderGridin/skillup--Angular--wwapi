import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user/user';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css'],
})
export class UserPostsComponent implements OnInit {
  @Input() public user!: User;

  constructor() {}

  ngOnInit(): void {}
}
