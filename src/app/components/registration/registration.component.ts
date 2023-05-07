import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/users';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  registrationForm!: FormGroup;
  users: IUser[] = this.localStorageService.get('users') ?? [];
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      login: [
        '',
        [Validators.required, Validators.minLength(3), this.noSpaceAllowed],
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(5), this.noSpaceAllowed],
      ],
    });
  }

  get login() {
    return this.registrationForm.get('login');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  async submitHandler() {
    this.registrationForm.markAllAsTouched();
    if (this.registrationForm.valid) {
      const newUser: IUser = this.registrationForm.value;
      if (
        this.users.filter((user: IUser) => user.login === newUser.login).length
      ) {
        this.registrationForm.setErrors({ notUniqueUser: true });
        return;
      }
      this.users.push(newUser);
      this.localStorageService.save('users', this.users);
      this.localStorageService.save('user', newUser);

      this.router.navigate(['/home']);
    }
  }

  noSpaceAllowed(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { noSpaceAllowed: true };
    }
    return null;
  }
  checkPass() {
    return (
      ((this.password!.hasError('required') ||
        this.password!.hasError('noSpaceAllowed')) &&
        this.password!.touched) ||
      this.password!.hasError('minlength')
    );
  }
  checkLogin() {
    return (
      ((this.login!.hasError('required') ||
        this.login!.hasError('noSpaceAllowed')) &&
        this.login!.touched) ||
      this.login!.hasError('minlength')
    );
  }
}
