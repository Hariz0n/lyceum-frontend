import { Component, OnInit } from '@angular/core';
import { LessonDtoResponse } from '../../../dto/LessonDtoResponse';
import { LessonsService } from '../../../services/lessons.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassService } from '../../../services/class.service';
import { forkJoin, map, tap } from 'rxjs';

@Component({
  selector: 'app-attach-class-lessons-list',
  templateUrl: './attach-class-lessons-list.component.html',
  styleUrls: ['./attach-class-lessons-list.component.css'],
})
export class AttachClassLessonsListComponent implements OnInit {
  isLoading = false;
  lessons!: LessonDtoResponse[];
  constructor(
    private lessonsService: LessonsService,
    private classService: ClassService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.isLoading = true;
    forkJoin([
      this.lessonsService.getAllLessons(this.route.snapshot.queryParams),
      this.classService.getClassData(this.route.snapshot.params['id']),
    ])
      .pipe(
        tap(e => console.log(e)),
        map(data => {
          return data[0].filter(
            lesson =>
              !data[1].classLesson.map(lsn => lsn.lessonId).includes(lesson.id)
          );
        }),
        tap(e => console.log(e))
      )
      .subscribe(e => {
        this.lessons = e;
        // console.log(this.route.snapshot.queryParams['subjectId']);
        this.isLoading = false;
      });
    // console.log(this.route.snapshot.queryParams);
  }

  onAttach(lessonId: number) {
    this.lessonsService
      .attachLessonToClass(lessonId, +this.route.snapshot.params['id'])
      .subscribe(() => {
        this.router.navigate(['/class', 'teacher']);
      });
  }
}
