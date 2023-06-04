import { Component } from '@angular/core';
import { TUI_ARROW } from '@taiga-ui/kit';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  readonly arrow = TUI_ARROW;
  constructor(protected authService: AuthService, private router: Router) {}

  open = false;

  toggle(open: boolean) {
    console.log(open);
    this.open = open;
  }
  logOut() {
    this.authService.logOut();
    this.toggle(false);
    this.router.navigate(['/']);
  }
  protected readonly AuthService = AuthService;
}
