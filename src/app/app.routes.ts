import { Routes } from '@angular/router';
import { Dashboard } from '../pages/dashboard/model/dashboard';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: Dashboard,
  },
  {
    path: 'transactions',
    component: Dashboard,
  },
  {
    path: 'reports',
    component: Dashboard,
  },
  {
    path: 'goals',
    component: Dashboard,
  },
];
