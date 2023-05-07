import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoggedInAuthGuard } from './guards/logged-in-auth.guard';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
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
  { path: 'home', component: MainPageComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
