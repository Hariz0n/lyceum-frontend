import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TeacherDataDtoResponse } from '../interfaces/TeacherDataDtoResponse';
import { LessonDtoResponse } from '../modules/class/interfaces/lessonDtoResponse';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  constructor(private httpClient: HttpClient) {}

  getTeacherData(id?: number) {
    return this.httpClient.get<TeacherDataDtoResponse>(
      `http://81.200.151.177:3000/api/teacher/${id}`
    );
  }

  getClassLessons(classId: number, subjectId: number) {
    return this.httpClient.get<LessonDtoResponse[]>(
      `http://81.200.151.177:3000/api/lessons/class/${classId}?subjectId=${subjectId}`
    );
  }
}
