import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
interface IForm {
  lastName: FormControl<string | null>;
  firstName: FormControl<string | null>;
  middleName: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  confirmPassword: FormControl<string | null>;
  type: FormControl<'student' | 'teacher' | null>;
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  registrationForm!: FormGroup;
  items = ['student', 'teacher'];
  constructor(private router: Router, private authService: AuthService) {
    this.registrationForm = new FormGroup<IForm>(
      {
        lastName: new FormControl<string>('', [
          Validators.required,
          Validators.minLength(3),
          this.noSpaceAllowed,
        ]),
        firstName: new FormControl<string>('', [
          Validators.required,
          Validators.minLength(2),
          this.noSpaceAllowed,
        ]),
        middleName: new FormControl<string>('', [
          Validators.required,
          Validators.minLength(3),
          this.noSpaceAllowed,
        ]),
        email: new FormControl<string>('', [
          Validators.required,
          Validators.minLength(5),
          this.noSpaceAllowed,
          Validators.email,
        ]),
        password: new FormControl<string>('', [
          Validators.required,
          Validators.minLength(8),
          this.noSpaceAllowed,
          Validators.pattern(
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
          ),
        ]),
        confirmPassword: new FormControl<string>('', [Validators.required]),
        type: new FormControl<'student' | 'teacher'>('student', [
          Validators.required,
        ]),
      },
      {
        validators: control => {
          if (control.value.password !== control.value.confirmPassword) {
            control
              .get('confirmPassword')!
              .setErrors({ differentPasswords: true });
          }
          return null;
        },
      }
    );
  }

  get lastName() {
    return this.registrationForm.get('lastName');
  }
  get firstName() {
    return this.registrationForm.get('firstName');
  }
  get middleName() {
    return this.registrationForm.get('middleName');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }

  async submitHandler() {
    this.registrationForm.markAllAsTouched();
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      this.authService.register(this.registrationForm.value).subscribe(
        () => {
          this.router.navigate(['/home']);
        },
        e => {
          console.log(e);
          this.registrationForm.setErrors(['']);
        }
      );
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
        this.password!.hasError('noSpaceAllowed') ||
        this.password!.hasError('pattern')) &&
        this.password!.touched) ||
      this.password!.hasError('minlength')
    );
  }
  checkEmail() {
    return (
      ((this.email!.hasError('required') ||
        this.email!.hasError('noSpaceAllowed') ||
        this.email!.hasError('email')) &&
        this.email!.touched) ||
      this.email!.hasError('minlength')
    );
  }
  checkLastName() {
    return (
      ((this.lastName!.hasError('required') ||
        this.lastName!.hasError('noSpaceAllowed')) &&
        this.lastName!.touched) ||
      this.lastName!.hasError('minlength')
    );
  }
  checkFirstName() {
    return (
      ((this.firstName!.hasError('required') ||
        this.firstName!.hasError('noSpaceAllowed')) &&
        this.firstName!.touched) ||
      this.firstName!.hasError('minlength')
    );
  }
  checkMiddleName() {
    return (
      ((this.middleName!.hasError('required') ||
        this.middleName!.hasError('noSpaceAllowed')) &&
        this.middleName!.touched) ||
      this.middleName!.hasError('minlength')
    );
  }
  checkConfirmPassword() {
    return (
      (this.confirmPassword!.hasError('required') ||
        this.confirmPassword!.hasError('differentPasswords')) &&
      this.confirmPassword!.touched
    );
  }
}
