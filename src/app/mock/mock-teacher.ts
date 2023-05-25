import { TeacherDataDtoResponse } from '../interfaces/TeacherDataDtoResponse';

export const mockTeacher: TeacherDataDtoResponse = {
  classSubjectTeacher: [
    {
      id: 0,
      cls: {
        id: 0,
        name: '5А',
        grade: 5,
      },
      subject: {
        id: 0,
        name: 'Математика',
      },
    },
    {
      id: 1,
      cls: {
        id: 1,
        name: '7Б',
        grade: 7,
      },
      subject: {
        id: 0,
        name: 'Математика',
      },
    },
    {
      id: 2,
      cls: {
        id: 2,
        name: '11Г',
        grade: 11,
      },
      subject: {
        id: 1,
        name: 'Алгоритмы и структуры данных asdasdas dasd asd asdasasdasd asd',
      },
    },
  ],
  email: 'coolTeacher@notshure.ru',
  firstName: 'А',
  id: 0,
  lastName: 'Б',
  middleName: 'Н',
  photoPath: '',
};
