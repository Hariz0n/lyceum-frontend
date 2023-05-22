import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestsComponent } from './requests/requests.component';
import { UnsolvedListComponent } from './unsolved-list/unsolved-list.component';
import { SolvedListComponent } from './solved-list/solved-list.component';
import { UnsolvedRequestComponent } from './unsolved-request/unsolved-request.component';
import { NewRequestComponent } from './new-request/new-request.component';
import { SolvedRequestComponent } from './solved-request/solved-request.component';

const routes: Routes = [
  {
    path: '',
    component: RequestsComponent,

    children: [
      { path: 'unsolved', component: UnsolvedListComponent },
      { path: 'unsolved/:id', component: UnsolvedRequestComponent },
      { path: 'solved', component: SolvedListComponent },
      { path: 'solved/:id', component: SolvedRequestComponent },
    ],
  },
  { path: 'new', component: NewRequestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelpRequestsRoutingModule {}
