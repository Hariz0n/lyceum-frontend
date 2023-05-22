import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LessonsService } from '../../../services/lessons.service';
import { LessonDtoResponse } from '../../../dto/LessonDtoResponse';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css'],
})
export class LessonComponent implements OnInit {
  lessonData!: LessonDtoResponse;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private lessonsService: LessonsService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.lessonsService
      .getLesson(Number(this.route.snapshot.params['id']))
      .subscribe(e => {
        this.lessonData = e;
        this.isLoading = false;
      });
  }
}
