import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Check if user is authenticated
  const isAuthenticated = localStorage.getItem('token') !== null;

  if (!isAuthenticated) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};
