import { Component } from '@angular/core';
import { TransactionsPanel } from "../../../widgets/transactions-panel/model/transactions-panel";
import { SpendingsPanel } from "../../../widgets/spendings-panel/model/spendings-panel";
import { GoalsPanel } from "../../../widgets/goals-panel/model/goals-panel";

@Component({
  selector: 'app-dashboard',
  templateUrl: '../ui/dashboard.html',
  styleUrls: ['../ui/dashboard.scss'],
  imports: [TransactionsPanel, SpendingsPanel, GoalsPanel],
})
export class Dashboard {}
