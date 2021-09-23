import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user/user';
import { UserOfUserInfo } from 'src/app/interfaces/user/user-of-user-info';
import { UserMapper } from 'src/app/mappers/UserMapper';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnInit {
  @Input() public user!: User;
  public userForRender!: UserOfUserInfo;

  constructor(private userMapper: UserMapper) {}

  public ngOnInit(): void {
    this.userForRender = this.userMapper.prepareForRenderInUserInfo(this.user);
  }
}
