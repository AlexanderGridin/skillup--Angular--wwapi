import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LocalApiService } from 'src/app/services/local-api/local-api.service';
import { User } from 'src/app/interfaces/user/user';

@Component({
  selector: 'users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
})
export class UsersTableComponent implements OnInit, OnDestroy {
  public users!: User[];
  private getUsersSub!: Subscription;

  constructor(private localApiService: LocalApiService) {}

  public ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    this.getUsersSub = this.localApiService.getUsers().subscribe({
      next: (users: User[]): void => {
        this.users = users;
      },
    });
  }

  public ngOnDestroy(): void {
    this.getUsersSub.unsubscribe();
  }
}
