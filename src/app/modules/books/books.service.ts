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
    return this.httpClient.get<IBook[]>(
      'http://81.200.151.177:3000/api/books',
      {}
    );
  }

  getBookById(id: number) {
    return this.httpClient.get<IBook>(
      `http://81.200.151.177:3000/api/books/${id}`,
      {
        params: {
          isFull: true,
        },
      }
    );
  }

  getBooksSubmodule(subId: number) {
    return this.httpClient.get<ISubmodule>(
      `http://81.200.151.177:3000/api/books/submodules/${subId}`
    );
  }
}
