import { Component, OnInit } from '@angular/core';
import { HelpRequestDtoResponse } from '../../../dto/HelpRequestDtoResponse';
import { HelpRequestsService } from '../../../services/help-requests.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { first } from 'rxjs';

interface IForm {
  message: FormControl<string | null>;
}

@Component({
  selector: 'app-unsolved-request',
  templateUrl: './unsolved-request.component.html',
  styleUrls: ['./unsolved-request.component.css'],
})
export class UnsolvedRequestComponent implements OnInit {
  isLoading = false;
  reqData!: HelpRequestDtoResponse;
  form!: FormGroup<IForm>;
  isEditing = false;
  constructor(
    private requestsService: HelpRequestsService,
    private route: ActivatedRoute,
    private router: Router,
    protected authService: AuthService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.requestsService
      .getOneUnsolvedReq(Number(this.route.snapshot.params['id']))
      .subscribe(d => {
        this.reqData = d;
        this.form = new FormGroup<IForm>({
          message: new FormControl<string>('', [Validators.required]),
        });
        this.isLoading = false;
      });
  }

  onSubmit() {
    this.authService.payload$.pipe(first()).subscribe(payload => {
      if (payload === undefined) {
        throw new Error();
      }

      this.requestsService
        .solveHelpReq({
          helpRequestId: this.reqData.id,
          mentor: { id: payload?.sub },
          message: this.form.value.message as string,
        })
        .subscribe(() => {
          this.router.navigate(['/help-requests', 'solved']);
        });
    });
  }
}
