import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../../../services/lessons.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubjectDtoResponse } from '../../../dto/SubjectDtoResponse';
import { Router } from '@angular/router';

interface IForm {
  name: FormControl<string | null>;
  information: FormControl<string | null>;
  difficultyScore: FormControl<number | null>;
  subjectId: FormControl<number | null>;
}

@Component({
  selector: 'app-lesson-new',
  templateUrl: './lesson-new.component.html',
  styleUrls: ['./lesson-new.component.css'],
})
export class LessonNewComponent implements OnInit {
  subjects!: SubjectDtoResponse[];
  isLoading = false;
  form!: FormGroup;
  constructor(private lessonService: LessonsService, private router: Router) {}

  ngOnInit() {
    this.isLoading = true;
    this.lessonService.getSubjects().subscribe(e => {
      this.subjects = e;
      this.form = new FormGroup<IForm>({
        difficultyScore: new FormControl<number>(0, [
          Validators.required,
          Validators.max(10),
          Validators.min(0),
        ]),
        information: new FormControl<string>('', Validators.required),
        name: new FormControl<string>('', Validators.required),
        subjectId: new FormControl<number | null>(null, Validators.required),
      });
      this.isLoading = false;
    });
  }

  onSubmit() {
    this.lessonService.addLesson(this.form.value).subscribe(() => {
      this.router.navigate(['/class', 'teacher']);
    });
  }
}
