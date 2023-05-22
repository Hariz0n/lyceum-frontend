import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRequestsRoutingModule } from './help-requests-routing.module';
import { RequestsComponent } from './requests/requests.component';
import { UnsolvedListComponent } from './unsolved-list/unsolved-list.component';
import { SolvedListComponent } from './solved-list/solved-list.component';
import { UnsolvedRequestComponent } from './unsolved-request/unsolved-request.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewRequestComponent } from './new-request/new-request.component';
import { SolvedRequestComponent } from './solved-request/solved-request.component';
import { TuiAccordionModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [
    RequestsComponent,
    UnsolvedListComponent,
    SolvedListComponent,
    UnsolvedRequestComponent,
    NewRequestComponent,
    SolvedRequestComponent,
  ],
  imports: [
    CommonModule,
    HelpRequestsRoutingModule,
    ReactiveFormsModule,
    TuiAccordionModule,
  ],
})
export class HelpRequestsModule {}
