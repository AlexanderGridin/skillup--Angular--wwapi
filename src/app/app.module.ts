import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { STORE } from './store/store';

import { EffectsModule } from '@ngrx/effects';
import { EFFECTS } from './store/effects';

import { RouterModule } from '@angular/router';
import { ROUTES } from './routing/routes';

import { AppComponent } from './app.component';
import { UsersTableComponent } from './components/tables/users-table/users-table.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { PageComponent } from './components/layout/page/page.component';
import { ContainerComponent } from './components/layout/container/container.component';
import { UserFormComponent } from './components/forms/user-form/user-form.component';
import { AddUserComponent } from './components/adding/add-user/add-user.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { PostComponent } from './components/post/post.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { PostsListComponent } from './components/lists/posts-list/posts-list.component';
import { PageSectionComponent } from './components/layout/page-section/page-section.component';
import { MessageComponent } from './components/message/message.component';
import { PostFormComponent } from './components/forms/post-form/post-form.component';
import { CommentComponent } from './components/comment/comment.component';
import { CommentsListComponent } from './components/lists/comments-list/comments-list.component';
import { AddPostComponent } from './components/adding/add-post/add-post.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { EditUserComponent } from './components/editing/edit-user/edit-user.component';

import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from '@progress/kendo-angular-dialog';

import { LocalApiService } from './services/local-api/local-api.service';
import { UsersStoreService } from './services/users-store/users-store.service';
import { PostsStoreService } from './services/posts-store/posts-store.service';
import { CommentsStoreService } from './services/comments-store/comments-store.service';

import { UserMapper } from './mappers/UserMapper';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EditPostComponent } from './components/editing/edit-post/edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    UsersPageComponent,
    PageComponent,
    ContainerComponent,
    UserFormComponent,
    AddUserComponent,
    UserPageComponent,
    PostComponent,
    UserPostsComponent,
    PostsListComponent,
    PageSectionComponent,
    MessageComponent,
    PostFormComponent,
    CommentComponent,
    CommentsListComponent,
    AddPostComponent,
    UserInfoComponent,
    EditUserComponent,
    EditPostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    GridModule,
    InputsModule,
    LabelModule,
    ButtonsModule,
    DialogsModule,

    StoreModule.forRoot(STORE),
    EffectsModule.forRoot(EFFECTS),
    RouterModule.forRoot(ROUTES),

    // Redux dev-tools
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [
    LocalApiService,
    UsersStoreService,
    PostsStoreService,
    CommentsStoreService,

    UserMapper,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
