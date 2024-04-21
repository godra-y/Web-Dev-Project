export interface Category {
  id: number;
  name: string;
  type: 'income' | 'expense';
  img: string;
}

export interface Transaction {
  id: number;
  category: number;
  amount: number;
  date: string;
  type: 'income' | 'expense';
}

export interface Budget {
  amount: number;
  period: 'daily' | 'weekly' | 'monthly';
}
