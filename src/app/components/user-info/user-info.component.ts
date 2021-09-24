import { Component, OnChanges, Input } from '@angular/core';

import { User } from 'src/app/interfaces/user/user';
import { UserOfUserInfo } from 'src/app/interfaces/user/user-of-user-info';

import { UserMapper } from 'src/app/mappers/UserMapper';

import { EMPTY_USER } from 'src/app/constants/empty-user';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css'],
})
export class UserInfoComponent implements OnChanges {
  @Input() public user!: User;

  public userForRender!: UserOfUserInfo;

  constructor(private userMapper: UserMapper) {}

  public ngOnChanges(): void {
    this.setUserForRender();
  }

  private setUserForRender(): void {
    if (this.user.id !== EMPTY_USER.id) {
      this.userForRender = this.userMapper.prepareForRenderInUserInfo(
        this.user
      );
    }
  }
}
