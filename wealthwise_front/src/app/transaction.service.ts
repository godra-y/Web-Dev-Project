import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction, Category } from "./models";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {
  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.URL}/transactions/`);
  }

  createTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.URL}/transactions/`, transaction);
  }

  deleteTransaction(id: number): Observable<Transaction> {
    return this.http.delete<Transaction>(`${this.URL}/transactions/${id}/`);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.URL}/categories/`)
  }

  getTransactionsByCategory(categoryId: number): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.URL}/categories/${categoryId}/transactions/`);
  }
}
