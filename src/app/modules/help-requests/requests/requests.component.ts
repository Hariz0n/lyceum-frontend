import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { StudentService } from '../../../services/student.service';
import { first, of, switchMap } from 'rxjs';
import { StudentDtoResponse } from '../../../dto/StudentDtoResponse';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css'],
  providers: [RouterOutlet],
})
export class RequestsComponent implements OnInit {
  userData?: StudentDtoResponse;
  isLoading = false;
  constructor(
    private authService: AuthService,
    private studentService: StudentService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.authService.payload$
      .pipe(
        switchMap(e => {
          return e?.sub
            ? this.studentService.getStudent(e.sub)
            : of(undefined).pipe(first());
        })
      )
      .subscribe(data => {
        this.userData = data;
        this.isLoading = false;
      });
  }
}
