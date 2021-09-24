import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { UsersStoreService } from 'src/app/services/users-store/users-store.service';

import { User } from 'src/app/interfaces/user/user';
import { UserOfUsersTable } from 'src/app/interfaces/user/user-of-users-table';

import { UserMapper } from 'src/app/mappers/UserMapper';

@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})
export class UsersTableComponent implements OnInit, OnDestroy {
  public usersForRender!: UserOfUsersTable[];
  private selectedUser!: UserOfUsersTable;

  public isUsersReadyForRender: boolean = false;

  private getUsersSub!: Subscription;

  @Output() private onSelectUserByDblclick: EventEmitter<number> =
    new EventEmitter<number>();

  constructor(
    private userMapper: UserMapper,
    private usersStoreService: UsersStoreService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    this.getUsersSub = this.usersStoreService.getUsers().subscribe({
      next: this.processUsersFromStore.bind(this),
    });
  }

  private processUsersFromStore(users: User[] | null): void {
    if (users) {
      this.setUsersForRender(users);
      this.isUsersReadyForRender = true;
    } else {
      this.usersStoreService.loadUsers();
    }
  }

  private setUsersForRender(users: User[]): void {
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
    this.router.navigate(['users', this.selectedUser.id]);
    this.onSelectUserByDblclick.emit(this.selectedUser.id);
  }

  public ngOnDestroy(): void {
    this.getUsersSub.unsubscribe();
  }
}
