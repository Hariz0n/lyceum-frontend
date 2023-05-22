import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../../../services/lessons.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LessonDtoResponse } from '../../../dto/LessonDtoResponse';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { SubjectDtoResponse } from '../../../dto/SubjectDtoResponse';

interface IForm {
  name: FormControl<string | null>;
  information: FormControl<string | null>;
  difficultyScore: FormControl<number | null>;
  subjectId: FormControl<number | null>;
}

@Component({
  selector: 'app-lesson-edit',
  templateUrl: './lesson-edit.component.html',
  styleUrls: ['./lesson-edit.component.css'],
})
export class LessonEditComponent implements OnInit {
  isLoading = false;
  lessonData!: LessonDtoResponse;
  form!: FormGroup;
  subjects!: SubjectDtoResponse[];
  constructor(
    private lessonsService: LessonsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.isLoading = true;
    forkJoin([
      this.lessonsService.getLesson(Number(this.route.snapshot.params['id'])),
      this.lessonsService.getSubjects(),
    ]).subscribe(e => {
      this.lessonData = e[0];
      this.subjects = e[1];
      console.log(this.subjects);
      this.form = new FormGroup<IForm>({
        name: new FormControl<string>(this.lessonData.name, [
          Validators.required,
        ]),
        information: new FormControl<string>(this.lessonData.information, [
          Validators.required,
        ]),
        difficultyScore: new FormControl<number>(
          this.lessonData.difficultyScore,
          [Validators.min(0), Validators.max(10)]
        ),
        subjectId: new FormControl<number>(this.lessonData.subject.id),
      });
      this.isLoading = false;
    });
  }

  onSubmit() {
    this.lessonsService
      .editLesson(this.lessonData.id, this.form.value)
      .subscribe(edit => {
        if (edit.affected) {
          this.router.navigate(['/lessons', this.lessonData.id]);
        }
      });
  }
}
