import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../data/auth-res.data';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

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
        refreshToken: true,
      }
    ).pipe(catchError(this.erorHanlder));
  }

  public login(email: string, password: string) {
    return this.http
      .post<AuthResponse>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.strCtrl}`,
        {
          email,
          password,
          refreshToken: true,
        }
      )
      .pipe(catchError(this.erorHanlder));
  }

  private erorHanlder(errorResponse: HttpErrorResponse) {
    let errMsg = 'An unknown error has occurred!';
    if (!errorResponse.error.error.message || !errorResponse.error.error) {
      return throwError(errMsg);
    }

    switch (errorResponse.error.error.message) {
      case 'EMAIL_NOT_FOUND':
      errMsg = 'There is no user record corresponding to this identifier. The user may have been deleted.';
      break;

      case 'EMAIL_EXISTS':
      errMsg = 'There is a user regisreted with the same e-mail address!';
      break;

      case 'OPERATION_NOT_ALLOWED':
      errMsg = 'Password sign-in is disabled for this project!';
      break;

      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
      errMsg = 'We have blocked all requests from this device due to unusual activity. Try again later!';
      break;

      case 'INVALID_PASSWORD':
      errMsg = 'Provided password is incorrect!';
      break;  

      case 'USER_DISABLED':
      errMsg = 'The user account has been disabled by an administrator';
      break;
    }
    
    return throwError(errMsg);
  }
}
