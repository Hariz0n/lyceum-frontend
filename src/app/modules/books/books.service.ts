import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBook } from './interfaces/book.interface';
import { ISubmodule } from './interfaces/submodule.inteface';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private httpClient: HttpClient) {}

  getAllBooks() {
    return this.httpClient.get<IBook[]>('http://localhost:3000/api/books', {
      headers: {
        Authorization:
          'Bearer ' +
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5ydSIsInN1YiI6MSwidHlwZSI6InN0dWRlbnQiLCJpYXQiOjE2ODQyMjg2NzksImV4cCI6MTY4NDIzNTg3OX0.ISr6Z26-J27PoVHwFrGJROtldXbSPRME-ix5xqChVR0',
      },
    });
  }

  getBookById(id: number) {
    return this.httpClient.get<IBook>(`http://localhost:3000/api/books/${id}`, {
      params: {
        isFull: true,
      },
      headers: {
        Authorization:
          'Bearer ' +
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5ydSIsInN1YiI6MSwidHlwZSI6InN0dWRlbnQiLCJpYXQiOjE2ODQyMjg2NzksImV4cCI6MTY4NDIzNTg3OX0.ISr6Z26-J27PoVHwFrGJROtldXbSPRME-ix5xqChVR0',
      },
    });
  }

  getBooksSubmodule(subId: number) {
    return this.httpClient.get<ISubmodule>(
      `http://localhost:3000/api/books/submodules/${subId}`,
      {
        headers: {
          Authorization:
            'Bearer ' +
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5ydSIsInN1YiI6MSwidHlwZSI6InN0dWRlbnQiLCJpYXQiOjE2ODQyMjg2NzksImV4cCI6MTY4NDIzNTg3OX0.ISr6Z26-J27PoVHwFrGJROtldXbSPRME-ix5xqChVR0',
        },
      }
    );
  }
}
