import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ViewListComponent } from './components/view-list/view-list.component';
import { CreateListComponent } from './components/create-list/create-list.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ViewDetailComponent } from './components/view-detail/view-detail.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { UpgradesComponent } from './components/upgrades/upgrades.component';
import { CancellationsComponent } from './components/cancellations/cancellations.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent,
    ViewListComponent,
    CreateListComponent,
    StatisticsComponent,
    ViewDetailComponent,
    LoginPageComponent,
    UpgradesComponent,
    CancellationsComponent,
    SignUpPageComponent,
    ForgotPasswordComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
