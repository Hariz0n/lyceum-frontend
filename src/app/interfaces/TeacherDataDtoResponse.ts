export interface IClassSubjectTeacher {
  id: number;
  cls: {
    id: number;
    name: string;
    grade: number;
  };
  subject: {
    id: number;
    name: string;
  };
}
export class TeacherDataDtoResponse {
  id!: number;
  firstName!: string;
  lastName!: string;
  middleName!: string;
  email!: string;
  photoPath!: string;
  classSubjectTeacher!: IClassSubjectTeacher[];
}
