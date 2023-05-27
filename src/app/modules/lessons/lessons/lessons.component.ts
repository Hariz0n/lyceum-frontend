import { Component, OnInit } from '@angular/core';
import {
  first,
  groupBy,
  map,
  mergeAll,
  mergeMap,
  switchMap,
  tap,
  toArray,
} from 'rxjs';
import { LessonsService } from '../../../services/lessons.service';
import { AuthService } from '../../../services/auth.service';
import { StudentService } from '../../../services/student.service';

interface ILessonData {
  subject: { id: number; name: string };
  lessons: {
    difficultyScore: number;
    id: number;
    information: string;
    name: string;
  }[];
}

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css'],
})
export class LessonsComponent implements OnInit {
  isLoading = false;
  lessonsData?: ILessonData[];
  constructor(
    private lessonsService: LessonsService,
    private studentService: StudentService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.authService.payload$
      .pipe(
        switchMap(payload => {
          return this.studentService.getStudent(payload?.sub as number);
        }),
        first(),
        map(data => {
          return data.class?.classLesson ?? [];
        }),
        mergeAll(),
        groupBy(data => data.lesson.subject.id),
        mergeMap(data => data.pipe(toArray())),
        map(data => {
          return {
            subject: data[0].lesson.subject,
            lessons: data.map(l => ({
              difficultyScore: l.lesson.difficultyScore,
              id: l.lesson.id,
              information: l.lesson.information,
              name: l.lesson.name,
            })),
          };
        }),
        toArray(),
        tap(e => console.log(e))
      )
      .subscribe(e => {
        this.lessonsData = e;
        this.isLoading = false;
      });
  }
}
