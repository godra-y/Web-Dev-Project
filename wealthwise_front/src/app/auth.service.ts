import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Token, UserProfile } from "./models";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<Token> {
    return this.http.post<Token>(
      `${this.URL}/login/`,
      {username, password}
    )
  }

  signup(username: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(
      `${this.URL}/signup/`,
      { username, email, password }
    );
  }

  logout(): void {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
  }
}

