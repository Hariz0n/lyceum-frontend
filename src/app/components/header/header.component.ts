import { Component } from '@angular/core';
import { TUI_ARROW } from '@taiga-ui/kit';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  full_name: string;
  readonly arrow = TUI_ARROW;
  constructor() {
    this.full_name = 'Кирилл Кузнецов';
  }
}
