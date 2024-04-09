import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction, Category } from "./models";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.URL}/transactions`);
  }

  createTransaction(transaction: Transaction): Observable<Transaction> {
    return this.http.post<Transaction>(`${this.URL}/transactions`, transaction);
  }

  updateTransaction(id: number, updatedTransaction: Transaction): Observable<Transaction> {
    return this.http.put<Transaction>(`${this.URL}/transactions/${id}`, updatedTransaction);
  }

  deleteTransaction(id: number): Observable<Transaction> {
    return this.http.delete<Transaction>(`${this.URL}/transactions/${id}`);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.URL}/categories`)
  }
}
