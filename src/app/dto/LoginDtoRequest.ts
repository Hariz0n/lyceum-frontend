export class LoginDtoRequest {
  email!: string;
  password!: string;
  type!: 'student' | 'teacher';
}
