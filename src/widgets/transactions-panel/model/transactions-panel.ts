import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions-panel',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: '../ui/transactions-panel.html',
  styleUrls: ['../ui/transactions-panel.scss'],
})
export class TransactionsPanel {
  transactionsList: Transaction[] = [
    {
      id: '0',
      type: 'income',
      description: 'Salary',
      categoryId: 'Work',
      date: new Date(2026, 6, 7),
      amount: 1367.23,
      currency: 'USD',
    },
    {
      id: '1',
      type: 'expense',
      description: 'Test Gas Station',
      categoryId: 'Logistics',
      date: new Date(2026, 6, 6),
      amount: 48.0,
      currency: 'USD',
    },
  ];
}
