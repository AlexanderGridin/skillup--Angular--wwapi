import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { LocalApiService } from './services/local-api/local-api.service';
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





@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    UsersPageComponent,
    PageComponent,
    ContainerComponent,
    UserFormComponent,
    AddUserComponent,
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
  ],
  providers: [LocalApiService, UserMapper],
  bootstrap: [AppComponent],
})
export class AppModule {}
