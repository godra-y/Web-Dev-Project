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

export interface UserProfile {
  id: number;
  username: string;
  email: string;
}

export interface Token {
  access: string;
  refresh: string;
}
