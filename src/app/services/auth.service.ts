import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginDtoRequest } from '../dto/LoginDtoRequest';
import { AuthDtoResponse } from '../dto/AuthDtoResponse';
import { RegisterDtoRequest } from '../dto/RegisterDtoRequest';
import { BehaviorSubject, tap } from 'rxjs';

interface IPayload {
  email: string;
  sub: number;
  type: 'student' | 'teacher';
  iat: number;
  exp: number;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _payload: BehaviorSubject<IPayload | undefined> = new BehaviorSubject<
    IPayload | undefined
  >(undefined);
  public payload$ = this._payload.asObservable();
  constructor(private httpClient: HttpClient) {
    const token = localStorage.getItem('access_token');
    if (token) {
      this._payload.next(JSON.parse(atob(token.split('.')[1])));
    }
  }

  login(credentials: LoginDtoRequest) {
    return this.httpClient
      .post<AuthDtoResponse>(
        'http://81.200.151.177:3000/api/auth/login',
        credentials
      )
      .pipe(
        tap(token => {
          localStorage.setItem('access_token', token.access_token);

          this._payload.next(
            JSON.parse(atob(token.access_token.split('.')[1]))
          );
        })
      );
  }

  register(creds: RegisterDtoRequest) {
    return this.httpClient
      .post<AuthDtoResponse>(
        'http://81.200.151.177:3000/api/auth/register',
        creds
      )
      .pipe(
        tap(e => console.log(e)),
        tap(token => {
          localStorage.setItem('access_token', token.access_token);
          this._payload.next(
            JSON.parse(atob(token.access_token.split('.')[1]))
          );
        })
      );
  }

  logOut() {
    localStorage.removeItem('access_token');
    this._payload.next(undefined);
  }

  hasValidAccessToken(): boolean {
    if (this._payload.value === undefined) {
      console.log('und');
      return false;
    }
    return +String(Date.now()).slice(0, 10) < this._payload.value?.exp;
  }
}
