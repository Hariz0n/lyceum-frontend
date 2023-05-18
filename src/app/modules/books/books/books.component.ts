import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { IBook } from '../interfaces/book.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  books!: IBook[];
  constructor(private bookService: BooksService) {}

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(books => {
      this.books = books;
    });
  }
}
