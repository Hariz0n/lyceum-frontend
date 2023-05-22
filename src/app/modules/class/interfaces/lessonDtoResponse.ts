export class LessonDtoResponse {
  id!: 10;
  name!: string;
  information!: string;
  difficultyScore!: number;
  subjectId!: number;
  subject!: {
    id: 1;
    name: 'Математика';
  };
}
