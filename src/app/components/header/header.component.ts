import { Component } from '@angular/core';
import { TUI_ARROW } from '@taiga-ui/kit';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  readonly arrow = TUI_ARROW;
  constructor(protected authService: AuthService) {}

  open = false;

  toggle(open: boolean) {
    console.log(open);
    this.open = open;
  }
  logOut() {
    this.authService.logOut();
  }
  protected readonly AuthService = AuthService;
}
