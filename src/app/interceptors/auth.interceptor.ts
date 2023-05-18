import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const access_token = window.localStorage.getItem('access_token');
    const newReq = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + access_token,
      },
    });
    return next.handle(newReq);
  }
}
