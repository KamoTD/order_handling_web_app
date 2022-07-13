import { Component, OnInit,Input } from '@angular/core';
import { Customer } from 'src/app/Model/customer';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  title = "ORDER HANDLING";
  customers: Customer[] = [];
  //Count variables for stats
  countActive = 0;
  countStatusUp = 0;
  countStatusCancel = 0;
  leadingIsp = "";
  accelerit = 0;
  homeConnect = 0;
  coolIdeas = 0;
  
  constructor(private custService : CustomerService) { }

  ngOnInit(): void {
    this.GetAllCustomers();
  }

  session(){
    return sessionStorage.getItem('username')
  }

  GetAllCustomers(){

    return this.custService.getAllCustomer().subscribe(data => 
      {
        this.customers = data;

        for(let x=0;x<this.customers.length;x++){
            if(this.customers[x].status === "Default" || this.customers[x].status === "Upgrade"){
              this.countActive++;
            }
        }

        for(let x=0;x<this.customers.length;x++){
          if(this.customers[x].status === "Upgrade"){
            this.countStatusUp++;
          }
          else if (this.customers[x].status === "Cancellation"){
            this.countStatusCancel++;
          }
        }

        for(let x=0;x<this.customers.length;x++){
          if(this.customers[x].ispName === "Accelerit"){
            this.accelerit++;
          }
          if(this.customers[x].ispName === "Home Connect"){
            this.homeConnect++;
          }
          if(this.customers[x].ispName === "Cool Ideas"){
            this.coolIdeas++;
          }

          //Getting the heighest ISP amongst the 3
          if(this.accelerit > this.coolIdeas && this.accelerit > this.homeConnect){
            this.leadingIsp = "Accelerit";
          }else if(this.coolIdeas > this.accelerit && this.coolIdeas > this.homeConnect){
            this.leadingIsp = "Cool Ideas";
          } else{
            this.leadingIsp = "Home Connect";
          }
      }

      });
  }



}
