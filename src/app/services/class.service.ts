import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClass } from '../modules/class/interfaces/class.interface';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  constructor(private httpClient: HttpClient) {}

  getClassData(id: number) {
    return this.httpClient.get<IClass>(
      `http://81.200.151.177:3000/api/class/${id}`
    );
  }
}
