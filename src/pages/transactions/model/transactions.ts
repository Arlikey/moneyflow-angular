import { Component, computed, inject, signal } from '@angular/core';
import { TransactionsPanel } from '../../../widgets/transactions-panel/model/transactions-panel';
import { TransactionsTable } from '../../../widgets/transactions-table/model/transactions-table';
import { TransactionService } from '../../../entities/transaction/model/transaction.service';

type FilterType = 'all' | 'income' | 'expense';

@Component({
  selector: 'app-transactions',
  templateUrl: '../ui/transactions.html',
  styleUrls: ['../ui/transactions.scss'],
  imports: [TransactionsPanel, TransactionsTable],
})
export class Transactions {
  transactionService = inject(TransactionService);

  filterType = signal<FilterType>('all');

  metadata = {
    title: 'Transactions',
    subtitle: 'All your income and expenses in one place',
  };

  filteredTransactions = computed(() => {
    const filterType = this.filterType();

    if (filterType === 'all') return this.transactionService.transactions();

    return this.transactionService.transactions().filter((t) => t.type === filterType);
  });

  filterByType(filter: FilterType) {
    this.filterType.set(filter);
  }
}
