import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoggedInAuthGuard } from './guards/logged-in-auth.guard';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AuthGuard } from './guards/auth.guard';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { WelcomeGuard } from './guards/welcome.guard';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: WelcomeComponent,
    canActivate: [WelcomeGuard],
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    canActivate: [LoggedInAuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoggedInAuthGuard],
  },
  { path: 'home', component: ProfileComponent, canActivate: [AuthGuard] },
  {
    path: 'books',
    loadChildren: () =>
      import('./modules/books/books.module').then(m => m.BooksModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'class',
    loadChildren: () =>
      import('./modules/class/class.module').then(m => m.ClassModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'lessons',
    loadChildren: () =>
      import('./modules/lessons/lessons.module').then(m => m.LessonsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'help-requests',
    loadChildren: () =>
      import('./modules/help-requests/help-requests.module').then(
        m => m.HelpRequestsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
