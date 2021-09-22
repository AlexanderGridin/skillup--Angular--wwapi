import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { LocalApiService } from './services/local-api/local-api.service';
import { UsersStoreService } from './services/users-store/users-store.service';

import { UsersTableComponent } from './components/users-table/users-table.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserMapper } from './mappers/UserMapper';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { PageComponent } from './components/page/page.component';
import { ContainerComponent } from './components/container/container.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';

import { usersReducer } from './store/users/users.reducer';
import { UsersEffects } from './store/users/users.effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { ROUTES } from './routing/routes';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { PostComponent } from './components/post/post.component';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GridModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InputsModule,
    LabelModule,
    ButtonsModule,
    DialogsModule,

    StoreModule.forRoot({ users: usersReducer }),
    EffectsModule.forRoot([UsersEffects]),

    RouterModule.forRoot(ROUTES),

    // Redux dev-tools
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [LocalApiService, UserMapper, UsersStoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
