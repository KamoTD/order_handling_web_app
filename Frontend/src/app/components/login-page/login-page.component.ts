import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminUser } from 'src/app/Model/admin-user';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  user : AdminUser = new AdminUser();
  loginResponse: string ="";

  constructor(private adminServ : AdminService, private router : Router) { }

  ngOnInit(): void {
  }

  login(){
    this.adminServ.validateUser(this.user).subscribe(data => 
      {
        this.router.navigateByUrl('/home');
        alert("Successfully Logged In");
        sessionStorage.setItem('username', data.username);
      }, 
    error => this.loginResponse = "Incorrect username or password");
  }
  
}
