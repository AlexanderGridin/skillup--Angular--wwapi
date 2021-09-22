import { Routes } from '@angular/router';
import { UsersPageComponent } from '../pages/users-page/users-page.component';
import { UserPageComponent } from '../pages/user-page/user-page.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: UsersPageComponent,
  },
  {
    path: 'users/:id',
    component: UserPageComponent,
  },
];
