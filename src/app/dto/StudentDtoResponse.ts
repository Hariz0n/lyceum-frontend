export interface IClassLesson {
  id: number;
  classId: number;
  lessonId: number;
  lesson: {
    id: number;
    name: string;
    information: string;
    difficultyScore: number;
    subject: {
      id: number;
      name: string;
    };
  };
}
export class StudentDtoResponse {
  id!: number;
  firstName!: string;
  lastName!: string;
  middleName!: string;
  email!: string;
  photoPath!: string;
  class?: {
    id: number;
    name: string;
    grade: number;
    classLesson: IClassLesson[];
  };
}
