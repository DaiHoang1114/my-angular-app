import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login').then(m => m.Login)
  },
  {
    path: '',
    loadComponent: () => import('./core/layout/main-layout.component').then(m => m.MainLayout),
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then(m => m.Home)
      },
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent)
      }
    ]
  },
  { path: '**', redirectTo: '/home' }
];
