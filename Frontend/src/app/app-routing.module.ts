import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancellationsComponent } from './components/cancellations/cancellations.component';
import { CreateListComponent } from './components/create-list/create-list.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { UpgradesComponent } from './components/upgrades/upgrades.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { ViewDetailComponent } from './components/view-detail/view-detail.component';
import { ViewListComponent } from './components/view-list/view-list.component';
import { AuthenticationService } from './Services/authentication.service';

const routes: Routes = [
  {path: '', redirectTo: '/login-page', pathMatch: 'full'},
  {path: 'home', component: HomePageComponent, canActivate:[AuthenticationService]},
  {path: 'view-list', component: ViewListComponent, canActivate:[AuthenticationService]},
  {path: 'create-list', component: CreateListComponent, canActivate:[AuthenticationService]},
  {path: 'edit/:id', component: CreateListComponent, canActivate:[AuthenticationService]},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'statistics', component: StatisticsComponent, canActivate:[AuthenticationService]},
  {path: 'upgrades', component: UpgradesComponent, canActivate:[AuthenticationService]},
  {path: 'cancellations', component: CancellationsComponent, canActivate:[AuthenticationService]},
  {path: 'view-list-detail/:id', component: ViewDetailComponent, canActivate:[AuthenticationService]},
  {path: 'profile/:id', component:UserProfileComponent, canActivate:[AuthenticationService]},
  {path: 'sign-up', component: SignUpPageComponent},
  {path: 'retrive-password', component: ForgotPasswordComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
