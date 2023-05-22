import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../../../services/teacher.service';
import { AuthService } from '../../../services/auth.service';
import {
  groupBy,
  map,
  mergeMap,
  switchAll,
  switchMap,
  take,
  tap,
  toArray,
} from 'rxjs';
import { SubjectsClassesData } from '../interfaces/subjects-classes-data';

@Component({
  selector: 'app-teacher-classes',
  templateUrl: './teacher-classes.component.html',
  styleUrls: ['./teacher-classes.component.css'],
})
export class TeacherClassesComponent implements OnInit {
  isLoading = false;
  subjectAndClassesData!: SubjectsClassesData[];
  constructor(
    private teacherService: TeacherService,
    private authService: AuthService
  ) {}
  ngOnInit() {
    this.isLoading = true;
    this.authService.payload$
      .pipe(
        switchMap(payload => {
          return this.teacherService.getTeacherData(payload?.sub);
        }),
        take(1),
        map(data => {
          return data.classSubjectTeacher;
        }),
        switchAll(),
        groupBy(data => data.subject.id),
        mergeMap(gr =>
          gr.pipe(
            mergeMap(val =>
              this.teacherService
                .getClassLessons(val.cls.id, val.subject.id)
                .pipe(
                  map(data => {
                    return {
                      id: val.id,
                      cls: { ...val.cls, lessons: data },
                      subject: { ...val.subject },
                    };
                  })
                )
            ),
            toArray()
          )
        ),
        map(arr => {
          return {
            id: arr[0].subject.id,
            name: arr[0].subject.name,
            classes: arr.map(ar => ar.cls),
          };
        }),
        toArray(),
        tap(e => console.log(e))
      )
      .subscribe(e => {
        this.subjectAndClassesData = e;
        this.isLoading = false;
      });
  }
}
