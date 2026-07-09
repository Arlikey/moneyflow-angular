import { Component, computed, inject, input, signal } from '@angular/core';
import { TransactionService } from '../../../entities/transaction/model/transaction.service';
import { CurrencyPipe, DatePipe } from '@angular/common';

type SortColumn = 'description' | 'categoryId' | 'date' | 'amount';
type SortDirection = 'asc' | 'desc';

@Component({
  selector: 'app-transactions-table',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: '../ui/transactions-table.html',
  styleUrls: ['../ui/transactions-table.scss'],
})
export class TransactionsTable {
  transactions = input.required<Transaction[]>();

  columns = [
    { key: 'description', label: 'Destination' },
    { key: 'categoryId', label: 'Category' },
    { key: 'date', label: 'Date' },
    { key: 'amount', label: 'Amount' },
  ] as const;

  sortColumn = signal<SortColumn | null>(null);
  sortDirection = signal<SortDirection>('asc');

  sortedTransactions = computed(() => {
    const column = this.sortColumn();
    const direction = this.sortDirection();
    const list = [...this.transactions()];

    if (!column) return list;

    return list.sort((a, b) => {
      const valA = a[column];
      const valB = b[column];

      let result = 0;
      if (valA < valB) result = -1;
      if (valA > valB) result = 1;

      return direction === 'asc' ? result : -result;
    });
  });

  sortBy(column: SortColumn) {
    if (this.sortColumn() === column) {
      this.sortDirection.update((d) => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      this.sortColumn.set(column);
      this.sortDirection.set('asc');
    }
  }
}
