import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user/user';
import { UsersStoreService } from '../users-store/users-store.service';
import { UsersSelectors } from 'src/app/store/users/users.selectors';
import { Store } from '@ngrx/store';

@Injectable()
export class LocalApiService {
  constructor(
    private http: HttpClient,
    private usersStoreService: UsersStoreService,
    private store$: Store
  ) {}

  private readonly baseUrl: string = 'http://localhost:3000';

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  public addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users`, user);
  }
}
