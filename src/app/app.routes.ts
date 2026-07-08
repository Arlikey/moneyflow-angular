import { Routes } from '@angular/router';
import { Dashboard } from '../pages/dashboard/model/dashboard';
import { Transactions } from '../pages/transactions/model/transactions';
import { Reports } from '../pages/reports/model/reports';
import { Goals } from '../pages/goals/model/goals';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: Dashboard,
  },
  {
    path: 'transactions',
    component: Transactions,
  },
  {
    path: 'reports',
    component: Reports,
  },
  {
    path: 'goals',
    component: Goals,
  },
];
