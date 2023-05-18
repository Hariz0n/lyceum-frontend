import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../modules/class/interfaces/user.interface';
import { IClass } from '../modules/class/interfaces/class.interface';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  constructor(private httpClient: HttpClient) {}

  getUserData() {
    return this.httpClient.get<IUser>('https://localhost:3000/api/student/1');
  }

  getClassData() {
    return this.httpClient.get<IClass>('http://localhost:3000/api/class/1');
  }
}
