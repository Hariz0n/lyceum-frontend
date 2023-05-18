import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyClassComponent } from './my-class/my-class.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MyClassComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassRoutingModule {}
