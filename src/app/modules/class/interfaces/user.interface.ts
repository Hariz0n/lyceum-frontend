export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  photoPath: string;
  class: {
    id: number;
    name: string;
    grade: 7;
    classLesson: [
      {
        id: number;
        classId: number;
        lessonId: number;
        lesson: {
          id: number;
          name: string;
          information: string;
          difficultyScore: number;
          subjectId: number;
        };
      }
    ];
  };
}
