import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EMPTY_USER } from 'src/app/constants/empty-user';

import { UsersStoreService } from 'src/app/services/users-store/users-store.service';

import { User } from 'src/app/interfaces/user/user';

@Component({
  selector: 'user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit, OnDestroy {
  public user!: User;

  public pageTitle: string = 'Loading user...';
  public isUserEmpty: boolean = false;

  private getUsersSub!: Subscription;
  private handleRouteParamsSub!: Subscription;
  private getUserByIdSub!: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private usersStoreSerivce: UsersStoreService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.getUsers();
    this.handleRouteParams();
  }

  private getUsers(): void {
    this.getUsersSub = this.usersStoreSerivce.getUsers().subscribe({
      next: this.processUsersFromStore.bind(this),
    });
  }

  private processUsersFromStore(users: User[] | null): void {
    !users && this.usersStoreSerivce.loadUsers();
  }

  private handleRouteParams(): void {
    this.handleRouteParamsSub = this.activatedRoute.params.subscribe({
      next: this.processRouteParams.bind(this),
    });
  }

  private processRouteParams(params: Params): void {
    this.initUserById(+params.id);
  }

  private initUserById(id: number): void {
    this.getUserByIdSub = this.usersStoreSerivce.getUserById(id).subscribe({
      next: this.processUserFromStore.bind(this),
    });
  }

  private processUserFromStore(user: User | null): void {
    if (user && user.id !== EMPTY_USER.id) {
      this.pageTitle = `${user.username} - [uid: ${user.id}]`;
      this.user = { ...user };
      this.usersStoreSerivce.setCurrentUser(user);
    }

    if (user && user.id === EMPTY_USER.id) {
      this.pageTitle = 'User not found...';
      this.isUserEmpty = true;
    }
  }

  public goToUsersPage(): void {
    this.router.navigate(['/']);
  }

  public ngOnDestroy(): void {
    this.getUsersSub.unsubscribe();
    this.handleRouteParamsSub.unsubscribe();
    this.getUserByIdSub.unsubscribe();

    this.usersStoreSerivce.unsetCurrentUser();
  }
}
