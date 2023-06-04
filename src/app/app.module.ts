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
  TuiLinkModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {
  TuiAccordionModule,
  TuiAvatarModule,
  TuiBadgedContentModule,
  TuiDataListDropdownManagerModule,
  TuiDataListWrapperModule,
  TuiSelectModule,
} from '@taiga-ui/kit';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TuiActiveZoneModule } from '@taiga-ui/cdk';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TuiSidebarModule } from '@taiga-ui/addon-mobile';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NgOptimizedImage, registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { ProfileComponent } from './components/profile/profile.component';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    RegistrationComponent,
    MainPageComponent,
    WelcomeComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
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
    ReactiveFormsModule,
    HttpClientModule,
    TuiSidebarModule,
    TuiAccordionModule,
    TuiLinkModule,
    TuiSelectModule,
    TuiDataListWrapperModule,
    TuiTextfieldControllerModule,
    NgOptimizedImage,
  ],
  providers: [
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
