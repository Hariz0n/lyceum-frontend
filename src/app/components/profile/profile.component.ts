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
  public subjects: { name: string; grade: string }[] = [];
  ngOnInit() {
    this.user$.subscribe(value => {
      if (
        !(value instanceof TeacherDataDtoResponse) &&
        this.type === 'student'
      ) {
        // this.grade = value.class.name;
        // value.class.classLesson.forEach(lesson => {
        //   this.subjects.push({
        //     name: lesson.lesson.name,
        //     grade: lesson.lesson.information,
        //   });
        // });
        this.grade = mockStudent.class?.name ?? '';
        mockStudent.class?.classLesson.forEach(e => {
          this.subjects.push({
            name: e.lesson.name,
            grade: e.lesson.information,
          });
        });
        // return;
      }
      if (!(value instanceof StudentDtoResponse) && this.type === 'teacher') {
        // value.classSubjectTeacher.forEach(subject =>
        //   this.subjects?.push(subject.subject.name)
        mockTeacher.classSubjectTeacher.forEach(a =>
          this.subjects.push({ name: a.subject.name, grade: a.cls.name })
        );
      }
    });
    console.log(this.subjects);
  }
}
