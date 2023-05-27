import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { LessonDtoResponse } from '../../../dto/LessonDtoResponse';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { first, switchMap } from 'rxjs';
import { StudentService } from '../../../services/student.service';
import { HelpRequestsService } from '../../../services/help-requests.service';
import { Router } from '@angular/router';
interface IForm {
  lesson: FormControl<number | null>;
  description: FormControl<string | null>;
  applicant: FormControl<{ id: number } | null>;
}

@Component({
  selector: 'app-new-request',
  templateUrl: './new-request.component.html',
  styleUrls: ['./new-request.component.css'],
})
export class NewRequestComponent implements OnInit {
  isLoading = false;
  isClassAttached = false;
  lessons!: LessonDtoResponse[];
  form!: FormGroup<IForm>;
  constructor(
    private studentService: StudentService,
    private authService: AuthService,
    private helpReqService: HelpRequestsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.authService.payload$
      .pipe(
        switchMap(payload => {
          return this.studentService.getStudent(payload?.sub as number);
        }),
        first()
      )
      .subscribe(data => {
        if (data.class) {
          this.isClassAttached = true;
          this.lessons = data.class.classLesson.map(t => t.lesson);
          this.form = new FormGroup<IForm>({
            lesson: new FormControl<number | null>(null, [Validators.required]),
            description: new FormControl<string>('', [Validators.required]),
            applicant: new FormControl<{ id: number } | null>({ id: data.id }),
          });
        }
        this.isLoading = false;
      });
  }

  onSubmit() {
    console.log(this.form.value);
    this.helpReqService
      .createHelpRequest({
        lesson: { id: this.form.value.lesson as number },
        applicant: this.form.value.applicant as { id: number },
        description: this.form.value.description as string,
      })
      .subscribe(helpReq => {
        this.router.navigate(['/help-requests', 'unsolved', helpReq.id]);
      });
  }
}
