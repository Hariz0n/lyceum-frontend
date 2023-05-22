import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { LessonDtoResponse } from '../dto/LessonDtoResponse';
import { LessonEditDtoRequest } from '../dto/LessonEditDtoRequest';
import { EditDtoResponse } from '../dto/EditDtoResponse';
import { SubjectDtoResponse } from '../dto/SubjectDtoResponse';
import { CreateLessonDtoRequest } from '../dto/createLessonDtoRequest';

@Injectable({
  providedIn: 'root',
})
export class LessonsService {
  constructor(private httpClient: HttpClient) {}

  getAllLessons(query?: { subjectId?: number }) {
    return this.httpClient.get<LessonDtoResponse[]>(
      'http://localhost:3000/api/lessons',
      {
        params: query,
      }
    );
  }

  getLesson(id: number) {
    return this.httpClient.get<LessonDtoResponse>(
      `http://localhost:3000/api/lessons/${id}`
    );
  }

  getClassLessons(classId: number, subjectId?: number) {
    return this.httpClient.get<LessonDtoResponse>(
      `http://localhost:3000/api/lessons/class/${classId}`,
      {
        params: subjectId ? { subjectId } : undefined,
      }
    );
  }

  editLesson(id: number, lesson: LessonEditDtoRequest) {
    return this.httpClient.patch<EditDtoResponse>(
      `http://localhost:3000/api/lessons/${id}`,
      lesson
    );
  }

  addLesson(createLessonDtoRequest: CreateLessonDtoRequest) {
    return this.httpClient.post<LessonDtoResponse>(
      `http://localhost:3000/api/lessons/`,
      createLessonDtoRequest
    );
  }

  getSubjects() {
    return this.httpClient.get<SubjectDtoResponse[]>(
      `http://localhost:3000/api/subjects`
    );
  }

  attachLessonToClass(lessonId: number, classId: number) {
    return this.httpClient.post<{
      classId: number;
      lessonId: number;
      id: number;
    }>(
      `http://localhost:3000/api/lessons/${lessonId}/attachClass?classId=${classId}`,
      {}
    );
  }
}
