import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ISubmodule } from '../interfaces/submodule.inteface';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})
export class BookDetailComponent implements OnInit {
  isLoaded = false;
  data!: ISubmodule;

  constructor(
    private booksService: BooksService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // console.log(this.activeRoute.snapshot.params);
    this.isLoaded = false;
    this.booksService
      .getBookById(this.activeRoute.snapshot.params['id'])
      .pipe(
        map(data => {
          return data.modules
            ?.find(
              md => md.id === +this.activeRoute.snapshot.params['moduleId']
            )
            ?.subModules.find(
              sub => sub.id === +this.activeRoute.snapshot.params['subModuleId']
            ) as ISubmodule;
        })
      )
      .subscribe(data => {
        this.data = data;
        this.isLoaded = true;
      });
  }
}
