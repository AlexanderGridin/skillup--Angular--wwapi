import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { LocalApiService } from './services/local-api/local-api.service';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserMapper } from './mappers/UserMapper';

@NgModule({
  declarations: [AppComponent, UsersTableComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    GridModule,
    BrowserAnimationsModule,
  ],
  providers: [LocalApiService, UserMapper],
  bootstrap: [AppComponent],
})
export class AppModule {}
