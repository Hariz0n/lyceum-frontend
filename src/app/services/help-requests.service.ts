import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelpRequestDtoResponse } from '../dto/HelpRequestDtoResponse';
import { SolveHelpRequestDtoRequest } from '../dto/SolveHelpRequestDtoRequest';
import { CreateHelpRequestDtoRequest } from '../dto/CreateHelpRequestDtoRequest';
import { SolvedHelpRequestDtoResponse } from '../dto/SolvedHelpRequestDtoResponse';

@Injectable({
  providedIn: 'root',
})
export class HelpRequestsService {
  constructor(private httpClient: HttpClient) {}

  createHelpRequest(createHelpRequestDtoRequest: CreateHelpRequestDtoRequest) {
    return this.httpClient.post<HelpRequestDtoResponse>(
      'http://81.200.151.177:3000/api/help-request',
      createHelpRequestDtoRequest
    );
  }

  getAllUnsolvedReqs() {
    return this.httpClient.get<HelpRequestDtoResponse[]>(
      'http://81.200.151.177:3000/api/help-request'
    );
  }

  getOneUnsolvedReq(id: number) {
    return this.httpClient.get<HelpRequestDtoResponse>(
      `http://81.200.151.177:3000/api/help-request/${id}`
    );
  }

  solveHelpReq(solveHelpRequestDtoRequest: SolveHelpRequestDtoRequest) {
    return this.httpClient.post<HelpRequestDtoResponse>(
      `http://81.200.151.177:3000/api/solved-help-requests`,
      solveHelpRequestDtoRequest
    );
  }

  getAllSolvedHelpRequests() {
    return this.httpClient.get<SolvedHelpRequestDtoResponse[]>(
      'http://81.200.151.177:3000/api/solved-help-requests'
    );
  }

  getOneSolvedHelpRequest(id: number) {
    return this.httpClient.get<SolvedHelpRequestDtoResponse>(
      `http://81.200.151.177:3000/api/solved-help-requests/${id}`
    );
  }
}
