import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const userLogin = localStorage.getItem('email');
  const router = inject(Router);
  if (userLogin == null) {
    router.navigateByUrl('login');
  }
  return true;
};
