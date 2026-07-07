interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  currency: string;
  categoryId: string;
  description: string;
  date: Date;
}
