import { Component, OnInit } from '@angular/core';
import { HelpRequestsService } from '../../../services/help-requests.service';
import { SolvedHelpRequestDtoResponse } from '../../../dto/SolvedHelpRequestDtoResponse';

@Component({
  selector: 'app-solved-list',
  templateUrl: './solved-list.component.html',
  styleUrls: ['./solved-list.component.css'],
})
export class SolvedListComponent implements OnInit {
  reqData!: SolvedHelpRequestDtoResponse[];
  isLoading = false;
  constructor(private helpReqService: HelpRequestsService) {}

  ngOnInit() {
    this.isLoading = true;
    this.helpReqService.getAllSolvedHelpRequests().subscribe(d => {
      this.reqData = d;
      this.isLoading = false;
    });
  }
}
