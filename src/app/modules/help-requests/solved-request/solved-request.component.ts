import { Component, OnInit } from '@angular/core';
import { HelpRequestsService } from '../../../services/help-requests.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { SolvedHelpRequestDtoResponse } from '../../../dto/SolvedHelpRequestDtoResponse';

@Component({
  selector: 'app-solved-request',
  templateUrl: './solved-request.component.html',
  styleUrls: ['./solved-request.component.css'],
})
export class SolvedRequestComponent implements OnInit {
  isLoading = false;
  reqData!: SolvedHelpRequestDtoResponse;
  constructor(
    private requestsService: HelpRequestsService,
    private route: ActivatedRoute,
    protected authService: AuthService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.requestsService
      .getOneSolvedHelpRequest(Number(this.route.snapshot.params['id']))
      .subscribe(d => {
        this.reqData = d;
        this.isLoading = false;
      });
  }
}
