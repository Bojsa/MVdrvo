import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'YOUR_API_URL'; // Zamenite sa vašim API URL-om

  constructor(private http: HttpClient) { }

  register(userData: any) {
    return this.http.post(`${this.apiUrl}/register`, userData).toPromise();
  }

  login(credentials: any) {
    return this.http.post(`${this.apiUrl}/login`, credentials).toPromise();
  }
}