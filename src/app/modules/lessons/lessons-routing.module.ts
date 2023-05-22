import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonComponent } from './lesson/lesson.component';
import { LessonEditComponent } from './lesson-edit/lesson-edit.component';
import { LessonNewComponent } from './lesson-new/lesson-new.component';
import { TeacherGuard } from '../../guards/teacher.guard';

const routes: Routes = [
  {
    path: 'new',
    pathMatch: 'full',
    component: LessonNewComponent,
    canActivate: [TeacherGuard],
  },
  { path: '', pathMatch: 'full', component: LessonsComponent },
  { path: ':id', pathMatch: 'full', component: LessonComponent },
  {
    path: ':id/edit',
    pathMatch: 'full',
    component: LessonEditComponent,
    canActivate: [TeacherGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonsRoutingModule {}
