import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { LocalApiService } from './services/local-api/local-api.service';
import { UsersTableComponent } from './components/users-table/users-table.component';

@NgModule({
  declarations: [AppComponent, UsersTableComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [LocalApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
