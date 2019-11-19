import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export interface AuthResponseData {
  idToken: string;
  refreshToken: string;
  expiresIn: string;
  email?: string;
  localId?: string;
  registered?: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBKuoX_S9n8yu1w23MQA7r3anlRU-Fesfw',
        {
          email,
          password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(errorResponse => {
          let errorMessage = 'An unknown error occured';
          if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(errorMessage);
          } else {
            switch (errorResponse.error.error.message) {
              case 'EMAIL_EXISTS':
                errorMessage = 'A user with that email already exists';
            }
            return throwError(errorMessage);
          }
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBKuoX_S9n8yu1w23MQA7r3anlRU-Fesfw',
        {
          email,
          password,
          returnSecureToken: true,
        }
      )
      .pipe();
  }
}
