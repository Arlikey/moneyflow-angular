import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: '../ui/sidebar.html',
  styleUrls: ['../ui/sidebar.scss'],
  imports: [RouterLink, RouterLinkActive],
})
export class Sidebar {
  readonly navbarItems = [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      routerLink: ['dashboard'],
    },
    {
      title: 'Transactions',
      icon: 'credit-card',
      routerLink: ['transactions'],
    },
    {
      title: 'Reports',
      icon: 'report',
      routerLink: ['reports'],
    },
    {
      title: 'Goals',
      icon: 'goal',
      routerLink: ['goals'],
    },
  ];
}
