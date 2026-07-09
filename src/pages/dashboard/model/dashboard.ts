import { Component, inject } from '@angular/core';
import { TransactionsPanel } from '../../../widgets/transactions-panel/model/transactions-panel';
import { SpendingsPanel } from '../../../widgets/spendings-panel/model/spendings-panel';
import { GoalsPanel } from '../../../widgets/goals-panel/model/goals-panel';
import { TransactionService } from '../../../entities/transaction/model/transaction.service';
import { CurrencyPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: '../ui/dashboard.html',
  styleUrls: ['../ui/dashboard.scss'],
  imports: [TransactionsPanel, SpendingsPanel, GoalsPanel, CurrencyPipe, PercentPipe],
})
export class Dashboard {
  transactionService = inject(TransactionService);

  metadata = {
    title: 'Dashboard',
    subtitle: "Here's what's happening with your money",
  };
}
