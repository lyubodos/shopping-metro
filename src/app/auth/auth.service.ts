import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from './data/auth-res.data';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceComponent {
  private readonly strCtrl = 'AIzaSyALBep5-I2zk3rgeB2lVTR54MkFoZuYBhU';

  constructor(private http: HttpClient) {}

  public signUp(email: string, password: string) {
    return this.http.post<AuthResponse>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.strCtrl}`,
      {
        email,
        password,
        returnSecureToken: true,
      }
    )
  }
}
