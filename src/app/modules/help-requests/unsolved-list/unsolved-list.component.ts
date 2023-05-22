import { Component, OnInit } from '@angular/core';
import { HelpRequestsService } from '../../../services/help-requests.service';
import { HelpRequestDtoResponse } from '../../../dto/HelpRequestDtoResponse';

@Component({
  selector: 'app-unsolved-list',
  templateUrl: './unsolved-list.component.html',
  styleUrls: ['./unsolved-list.component.css'],
})
export class UnsolvedListComponent implements OnInit {
  reqData!: HelpRequestDtoResponse[];
  isLoading = false;
  constructor(private helpReqService: HelpRequestsService) {}

  ngOnInit() {
    this.isLoading = true;
    this.helpReqService.getAllUnsolvedReqs().subscribe(d => {
      this.reqData = d;
      this.isLoading = false;
    });
  }
}
