export class LessonDtoResponse {
  id!: number;
  name!: string;
  information!: string;
  difficultyScore!: number;
  subject!: {
    id: number;
    name: string;
  };
}
