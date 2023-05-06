import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiSvgModule,
  TuiDataListModule,
  TuiDropdownModule,
  TuiButtonModule,
  TuiHostedDropdownModule,
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {
  TuiAvatarModule,
  TuiBadgedContentModule,
  TuiDataListDropdownManagerModule,
} from '@taiga-ui/kit';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';
import { RouterLink, RouterLinkActive } from '@angular/router';

@NgModule({
  declarations: [AppComponent, HeaderComponent, SidebarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiAvatarModule,
    TuiSvgModule,
    TuiDataListModule,
    TuiDropdownModule,
    TuiActiveZoneModule,
    TuiButtonModule,
    TuiHostedDropdownModule,
    TuiDataListDropdownManagerModule,
    RouterLink,
    RouterLinkActive,
    TuiBadgedContentModule,
  ],
  providers: [{ provide: TUI_SANITIZER, useClass: NgDompurifySanitizer }],
  bootstrap: [AppComponent],
})
export class AppModule {}
