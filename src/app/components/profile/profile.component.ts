import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TeacherService } from '../../services/teacher.service';
import { Observable } from 'rxjs';
import { StudentService } from '../../services/student.service';
import { TeacherDataDtoResponse } from '../../interfaces/TeacherDataDtoResponse';
import { StudentDtoResponse } from '../../dto/StudentDtoResponse';
import { mockTeacher } from '../../mock/mock-teacher';
import { mockStudent } from '../../mock/mock-student';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent {
  constructor(
    private authService: AuthService,
    private teacherService: TeacherService,
    private studentService: StudentService
  ) {
    this.authService.payload$.subscribe(e => {
      console.log(e);
      const type = e!.type;
      this.type = type;
      if (type === 'teacher') {
        this.user$ = this.teacherService.getTeacherData(e!.sub);
      }
      if (type === 'student') {
        this.user$ = this.studentService.getStudent(e!.sub);
      }
    });
  }
  public user$: Observable<TeacherDataDtoResponse | StudentDtoResponse> =
    new Observable<TeacherDataDtoResponse | StudentDtoResponse>();
  public type!: 'student' | 'teacher';
  public grade = '';
  public subjectsS: { name: string; grade: number }[] = [];
  public subjectsT: { name: string; grade: string }[] = [];
  ngOnInit() {
    this.user$.subscribe(value => {
      if (
        !(value instanceof TeacherDataDtoResponse) &&
        this.type === 'student' &&
        value !== undefined
      ) {
        console.log(value);
        this.grade = value.class?.name ?? '';
        const visited: number[] = [];
        value.class!.classLesson.forEach(lesson => {
          if (visited.indexOf(lesson.lesson.subject.id) !== -1) {
            this.subjectsS[
              visited.indexOf(lesson.lesson.subject.id)
            ].grade += 1;
          } else {
            this.subjectsS.push({
              name: lesson.lesson.subject.name,
              grade: 1,
            });
            visited.push(lesson.lesson.subject.id);
          }
        });
      }
      if (!(value instanceof StudentDtoResponse) && this.type === 'teacher') {
        value.classSubjectTeacher.forEach(subject =>
          this.subjectsT?.push({
            name: subject.subject.name,
            grade: subject.cls.name,
          })
        );
      }
    });
  }
}
