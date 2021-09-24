import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from 'src/app/interfaces/user/user';
import { AddUserFormData } from 'src/app/interfaces/form-data/add-user-form-data';
import { Post } from 'src/app/interfaces/post';
import { Comment } from 'src/app/interfaces/comment';
import { PostDTO } from 'src/app/interfaces/post-dto';

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

  public updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/users/${user.id}`, user);
  }

  public getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}/api/posts`);
  }

  public addPost(post: PostDTO): Observable<Post> {
    return this.http.post<Post>(`${this.baseUrl}/api/posts`, post);
  }

  public removePostById(postId: number): Observable<Object> {
    return this.http.delete(`${this.baseUrl}/api/posts/${postId}`);
  }

  public updatePost(post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.baseUrl}/api/posts/${post.id}`, post);
  }

  public getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.baseUrl}/api/comments`);
  }
}
