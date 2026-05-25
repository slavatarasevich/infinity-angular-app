import { Routes } from '@angular/router';
import { Login } from '../pages/login/login';
import { RegPage } from '../pages/registration/registration/registration';

export const routes: Routes = [
  {
    path: '',
    component: Login,
  },
  {
    path: 'reg-page',
    component: RegPage,
  },
];
