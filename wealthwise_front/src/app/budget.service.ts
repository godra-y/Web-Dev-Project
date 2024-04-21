import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Budget, Transaction} from "./models";

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getBudget(): Observable<Budget[]> {
    return this.http.get<Budget[]>(`${this.URL}/budget`);
  }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(`${this.URL}/transactions`);
  }

  setBudget(budget: Budget): Observable<Budget> {
    return this.http.put<Budget>(`${this.URL}/budget`, budget);
  }
}
