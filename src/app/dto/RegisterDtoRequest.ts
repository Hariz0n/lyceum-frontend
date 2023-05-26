export class RegisterDtoRequest {
  firstName!: string;
  lastName!: string;
  middleName?: string;
  email!: string;
  password!: string;
  type!: 'student' | 'teacher';
}
