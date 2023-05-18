import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { ClassRoutingModule } from './class-routing.module';
import { MyClassComponent } from './my-class/my-class.component';

@NgModule({
  declarations: [MyClassComponent],
  imports: [CommonModule, ClassRoutingModule, NgOptimizedImage],
})
export class ClassModule {}
