import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyClassComponent } from './my-class/my-class.component';
import { TeacherClassesComponent } from './teacher-classes/teacher-classes.component';
import { AttachClassLessonsListComponent } from './attach-class-lessons-list/attach-class-lessons-list.component';
import { TeacherGuard } from '../../guards/teacher.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MyClassComponent },
  {
    path: 'teacher',
    pathMatch: 'full',
    component: TeacherClassesComponent,
    canActivate: [TeacherGuard],
  },
  {
    path: ':id/attach',
    component: AttachClassLessonsListComponent,
    canActivate: [TeacherGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassRoutingModule {}
