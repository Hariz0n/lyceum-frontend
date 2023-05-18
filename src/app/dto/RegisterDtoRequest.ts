export class RegisterDtoRequest {
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;
  type!: 'student' | 'teacher';
}
