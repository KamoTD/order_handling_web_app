import { Component, OnInit } from '@angular/core';
import { endWith } from 'rxjs';
import { AdminUser } from 'src/app/Model/admin-user';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  users : AdminUser[] = [];
  Validusername: string ="";
  retrievePass: string;
  constructor(private adminServ : AdminService) { }

  ngOnInit(): void {
  }

  getPassword(){
    this.adminServ.getUsers().subscribe(data => 
      {
        this.users = data;
  
        for(let x=0;x< this.users.length;x++){

          if(this.Validusername === this.users[x].username){
              this.retrievePass = this.users[x].password;
          }
        }

      });

  }

}
