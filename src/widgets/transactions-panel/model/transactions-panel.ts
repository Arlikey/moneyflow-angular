import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { TransactionService } from '../../../entities/transaction/model/transaction.service';
import { RouterLink } from '@angular/router';
import { TransactionsTable } from '../../transactions-table/model/transactions-table';

@Component({
  selector: 'app-transactions-panel',
  imports: [DatePipe, CurrencyPipe, RouterLink, TransactionsTable],
  templateUrl: '../ui/transactions-panel.html',
  styleUrls: ['../ui/transactions-panel.scss'],
})
export class TransactionsPanel {
  transactionService = inject(TransactionService);
}
