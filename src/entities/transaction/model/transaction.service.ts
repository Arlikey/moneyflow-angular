import { computed, Injectable, signal } from '@angular/core';
import { MOCKS_TRANSACTIONS } from '../mocks/transaction.mocks';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  transactions = signal<Transaction[]>(MOCKS_TRANSACTIONS);

  readonly currentMonthTransactions = computed(() => {
    const now = new Date();

    return this.transactions().filter((transaction) => {
      return (
        transaction.date.getMonth() === now.getMonth() &&
        transaction.date.getFullYear() === now.getFullYear()
      );
    });
  });

  readonly recentTransactions = computed(() =>
    [...this.transactions()].sort((t1, t2) => t2.date.getTime() - t1.date.getTime()).slice(0, 10),
  );

  readonly monthlyIncome = computed(() =>
    this.currentMonthTransactions()
      .filter((t) => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0),
  );

  readonly monthlyExpense = computed(() =>
    this.currentMonthTransactions()
      .filter((t) => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0),
  );

  readonly totalIncome = computed(() =>
    this.transactions()
      .filter((t) => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0),
  );

  readonly totalExpense = computed(() =>
    this.transactions()
      .filter((t) => t.type === 'expense')
      .reduce((sum, t) => sum + t.amount, 0),
  );

  readonly totalBalance = computed(() => this.totalIncome() - this.totalExpense());

  readonly savingsRate = computed(
    () => (this.monthlyIncome() - this.monthlyExpense()) / this.monthlyIncome(),
  );
}
