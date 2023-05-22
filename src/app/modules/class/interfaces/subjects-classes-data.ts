import { LessonDtoResponse } from './lessonDtoResponse';

export class SubjectsClassesData {
  id!: number;
  name!: string;
  classes!: {
    id: number;
    name: string;
    grade: number;
    lessons: LessonDtoResponse[];
  }[];
}
