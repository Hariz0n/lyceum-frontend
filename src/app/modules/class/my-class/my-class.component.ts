import { Component, OnInit } from '@angular/core';
import { IClass } from '../interfaces/class.interface';
import { ClassService } from '../../../services/class.service';
import { AuthService } from '../../../services/auth.service';
import { StudentService } from '../../../services/student.service';
import { first, Observable, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-my-class',
  templateUrl: './my-class.component.html',
  styleUrls: ['./my-class.component.css'],
})
export class MyClassComponent implements OnInit {
  isLoading = false;
  classData?: IClass;
  constructor(
    private classService: ClassService,
    private authService: AuthService,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.authService.payload$
      .pipe(
        switchMap(payload => {
          return this.studentService.getStudent(payload?.sub as number);
        }),
        switchMap(stud => {
          return stud.class?.id
            ? this.classService.getClassData(stud.class.id)
            : of(undefined).pipe(first());
        }),
        first()
      )
      .subscribe(data => {
        this.classData = data;
        console.log(data);
        this.isLoading = false;
      });
  }

  protected readonly console = console;
}
