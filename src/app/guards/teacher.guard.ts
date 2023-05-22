import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { first, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class TeacherGuard implements CanActivate {
  private payload?: { type: 'student' | 'teacher' };
  constructor(private authService: AuthService) {
    this.authService.payload$.pipe(first()).subscribe(payload => {
      if (payload) {
        this.payload = payload;
      }
    });
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.payload) {
      return false;
    }
    return this.payload.type === 'teacher';
  }
}
