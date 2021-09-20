import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { UserMapper } from 'src/app/mappers/UserMapper';
import { LocalApiService } from 'src/app/services/local-api/local-api.service';

import { User } from 'src/app/interfaces/user/user';
import { UserOfUsersTable } from 'src/app/interfaces/user/user-of-users-table';

@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})
export class UsersTableComponent implements OnInit, OnDestroy {
  public usersForRender!: UserOfUsersTable[];

  private getUsersSub!: Subscription;

  private selectedUser!: UserOfUsersTable;

  @Output() private onSelectUserByDblclick: EventEmitter<number> =
    new EventEmitter<number>();

  constructor(
    private userMapper: UserMapper,
    private localApiService: LocalApiService
  ) {}

  public ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    this.getUsersSub = this.localApiService.getUsers().subscribe({
      next: this.setUsersForRender.bind(this),
    });
  }

  public setUsersForRender(users: User[]): void {
    this.usersForRender = users.map((user: User) =>
      this.userMapper.prepareForRenderInUsersTable(user)
    );
  }

  public handleKendoCellClick({
    dataItem,
  }: {
    dataItem: UserOfUsersTable;
  }): void {
    this.selectedUser = dataItem;
  }

  public handleKendoGridDoubleClick(): void {
    console.log(this.selectedUser);
    this.onSelectUserByDblclick.emit(this.selectedUser.id);
  }

  public ngOnDestroy(): void {
    this.getUsersSub.unsubscribe();
  }
}
