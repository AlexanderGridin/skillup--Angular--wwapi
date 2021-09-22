import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/interfaces/user/user';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersStoreService } from 'src/app/services/users-store/users-store.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css'],
})
export class UserPageComponent implements OnInit, OnDestroy {
  public user!: User | undefined;

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
      next: this.handleUsersFromStore.bind(this),
    });
  }

  private handleUsersFromStore(users: User[]): void {
    users.length === 0 && this.usersStoreSerivce.loadUsers();
  }

  private handleRouteParams(): void {
    this.handleRouteParamsSub = this.activatedRoute.params.subscribe({
      next: (params: Params): void => {
        this.getUserById(+params.id);
      },
    });
  }

  private getUserById(id: number): void {
    this.getUserByIdSub = this.usersStoreSerivce.getUserById(id).subscribe({
      next: (user: User | undefined): void => {
        this.user = user;
      },
    });
  }

  public goToAllUsers(): void {
    this.router.navigate(['/']);
  }

  public ngOnDestroy(): void {
    this.getUsersSub.unsubscribe();
    this.handleRouteParamsSub.unsubscribe();
    this.getUserByIdSub.unsubscribe();
  }
}
