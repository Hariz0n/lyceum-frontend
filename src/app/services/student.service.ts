import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudentDtoResponse } from '../dto/StudentDtoResponse';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private httpClient: HttpClient) {}

  getStudent(id: number | undefined) {
    return this.httpClient.get<StudentDtoResponse>(
      `http://81.200.151.177:3000/api/student/${id}`
    );
  }
}
