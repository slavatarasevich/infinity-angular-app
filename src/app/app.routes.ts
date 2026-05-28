import { Routes } from '@angular/router';
import { Login } from '../pages/login/login';
import { RegPage } from '../pages/registration/registration/registration';
import { Users } from '../Shared/Components/users/users';
import { authGuard } from '../Shared/Guards/auth-guard/auth-guard';

export const routes: Routes = [
  {
    path: '',
    component: Login,
  },

  {
    path: 'reg-page',
    component: RegPage,
    canActivate: [authGuard],
  },
  {
    path: 'users',
    component: Users,
    canActivate: [authGuard],
  },
  { path: '**', redirectTo: '' },

  // { path: '**', redirectTo: '/' },
];
