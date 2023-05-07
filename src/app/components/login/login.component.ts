import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { IUser } from 'src/app/interfaces/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  public loginForm!: FormGroup;
  public users: IUser[] = this.localStorageService.get('users') ?? [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get login() {
    return this.loginForm.get('login');
  }

  get password() {
    return this.loginForm.get('password');
  }

  async submitHandler() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      const currentUser: IUser = this.loginForm.value;
      if (
        this.users.filter(
          (user: IUser) => JSON.stringify(currentUser) === JSON.stringify(user)
        ).length
      ) {
        this.localStorageService.save('user', currentUser);
        this.router.navigate(['/home']);
      } else {
        this.loginForm.setErrors({ noSuchUser: true });
      }
    }
  }
}
