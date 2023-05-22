import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ClassRoutingModule } from './class-routing.module';
import { MyClassComponent } from './my-class/my-class.component';
import { TeacherClassesComponent } from './teacher-classes/teacher-classes.component';
import { TuiButtonModule } from '@taiga-ui/core';
import { AttachClassLessonsListComponent } from './attach-class-lessons-list/attach-class-lessons-list.component';

@NgModule({
  declarations: [
    MyClassComponent,
    TeacherClassesComponent,
    AttachClassLessonsListComponent,
  ],
  imports: [
    CommonModule,
    ClassRoutingModule,
    NgOptimizedImage,
    TuiButtonModule,
  ],
})
export class ClassModule {}
