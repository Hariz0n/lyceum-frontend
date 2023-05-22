import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonsRoutingModule } from './lessons-routing.module';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonComponent } from './lesson/lesson.component';
import { LessonEditComponent } from './lesson-edit/lesson-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LessonNewComponent } from './lesson-new/lesson-new.component';

@NgModule({
  declarations: [
    LessonsComponent,
    LessonComponent,
    LessonEditComponent,
    LessonNewComponent,
  ],
  imports: [CommonModule, LessonsRoutingModule, ReactiveFormsModule],
})
export class LessonsModule {}
