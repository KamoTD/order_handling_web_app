import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { AdminUser } from 'src/app/Model/admin-user';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent implements OnInit {

  user : AdminUser = new AdminUser();
  adminCode: number;
  confirmPass: string;
  
  constructor(private adminServ : AdminService, private router : Router) { }

  ngOnInit(): void {
  }

  register(){
    if(this.adminCode == 1998 && this.confirmPass == this.user.password){
      this.adminServ.registerUsers(this.user).subscribe(data =>
        {
          alert("Registered Successfully");
          this.router.navigateByUrl('/login-page');
        });
    }
    else{
      alert("Invalid admin code or password");
    }
    
  }
}
