export interface IClass {
  id: number;
  name: string;
  grade: number;
  students: [
    {
      id: number;
      firstName: string;
      lastName: string;
      middleName: string;
      email: string;
      photoPath: string;
    }
  ];
  classSubjectTeacher: [
    {
      id: number;
      teacher: {
        id: number;
        firstName: string;
        lastName: string;
        middleName: string;
        email: string;
        photoPath: string;
      };
      subject: {
        id: number;
        name: 'Математика';
      };
    }
  ];
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
}
