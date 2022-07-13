import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';
import { AdminUser } from 'src/app/Model/admin-user';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user : AdminUser = new AdminUser();
  
  constructor(private router : Router, private route: ActivatedRoute, private adminServ : AdminService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params : ParamMap) => {
        let isPresent = params.has('id')

        if(isPresent){
          let id: any = params.get('id');
          this.adminServ.getUser(id).subscribe(data => this.user = data);
        }
    });
  }

  updateInfo(){
    this.adminServ.registerUsers(this.user).subscribe(data => {
      alert('Profile Updated');
    });
  }

}
