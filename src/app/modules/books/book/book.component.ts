import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IBook } from '../interfaces/book.interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  data!: IBook;
  isLoaded = false;
  search = '';
  constructor(
    private bookService: BooksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.isLoaded = false;
    this.bookService
      .getBookById(Number(this.route.snapshot.params['id']))
      .subscribe(book => {
        this.data = book;
        this.isLoaded = true;
      });
  }

  protected readonly console = console;
}
