export interface Category {
  id: number;
  name: string;
  type: 'income' | 'expense';
}
export interface Transaction {
  id: number;
  category: string;
  amount: number;
  date: string;
}
