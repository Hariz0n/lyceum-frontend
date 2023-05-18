import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

interface IForm {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  type: FormControl<'student' | 'teacher' | null>;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup<IForm>({
      email: new FormControl<string>('', [
        Validators.email,
        Validators.required,
      ]),
      password: new FormControl<string>('', [
        Validators.minLength(6),
        Validators.required,
      ]),
      type: new FormControl<'student' | 'teacher'>('student', [
        Validators.required,
      ]),
    });
  }

  submitHandler() {
    this.authService.login(this.loginForm.value).subscribe(
      value => {
        this.router.navigate(['/books']);
      },
      error => {
        this.loginForm.setErrors(['']);
      }
    );
  }
}
