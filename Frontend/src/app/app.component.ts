import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminUser } from './Model/admin-user';
import { AdminService } from './Services/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'order_handling_web_app';
  userId :any;

  constructor(private router: Router){}
  

  isUserLoggedIn(){
    let user = sessionStorage.getItem('username');
    this.userId = user;
    return !(user === null);
  }

  logOut(){
    sessionStorage.removeItem('username');
    this.router.navigateByUrl('/login-page');
    alert("Logging Out...See you soon");
  }

}
