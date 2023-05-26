import { StudentDtoResponse } from '../dto/StudentDtoResponse';

export const mockStudent: StudentDtoResponse = {
  class: {
    classLesson: [
      {
        id: 0,
        classId: 1,
        lessonId: 0,
        lesson: {
          id: 0,
          name: 'Математика для чайников',
          information: 'Очень сложное описание',
          difficultyScore: 0.5,
          subject: {
            id: 0,
            name: 'Математика',
          },
        },
      },
    ],
    grade: 7,
    id: 1,
    name: '7Б',
  },
  email: 'BadStudent@mail.ru',
  firstName: 'Ян',
  id: 0,
  lastName: 'Грибович',
  middleName: 'Астафьев',
  photoPath: '',
};
