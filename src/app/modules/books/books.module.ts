import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books/books.component';
import { BooksRoutingModule } from './books-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BookComponent } from './book/book.component';
import {
  TuiAccordionModule,
  TuiHighlightModule,
  TuiInputModule,
} from '@taiga-ui/kit';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { TuiTextfieldControllerModule } from '@taiga-ui/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BooksComponent, BookComponent, BookDetailComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule,
    TuiAccordionModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    FormsModule,
    TuiHighlightModule,
  ],
})
export class BooksModule {}
