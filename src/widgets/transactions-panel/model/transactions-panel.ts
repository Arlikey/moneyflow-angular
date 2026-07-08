import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { TransactionService } from '../../../entities/transaction/model/transaction.service';
import { RouterLink } from "@angular/router";

type SortColumn = 'description' | 'categoryId' | 'date' | 'amount';
type SortDirection = 'asc' | 'desc';

@Component({
  selector: 'app-transactions-panel',
  imports: [DatePipe, CurrencyPipe, RouterLink],
  templateUrl: '../ui/transactions-panel.html',
  styleUrls: ['../ui/transactions-panel.scss'],
})
export class TransactionsPanel {
  transactionService = inject(TransactionService);

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
    const list = [...this.transactionService.transactions()];

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
