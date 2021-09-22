import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/interfaces/user/user';
import { AddUserFormData } from 'src/app/interfaces/form-data/add-user-form-data';
import { Post } from 'src/app/interfaces/post';

@Injectable()
export class LocalApiService {
  constructor(private http: HttpClient) {}

  private readonly baseUrl: string = 'http://localhost:3000';

  public getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  public addUser(userFormData: AddUserFormData): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/users`, userFormData);
  }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/api/posts`);
  }
}
