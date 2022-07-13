import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Model/customer';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-upgrades',
  templateUrl: './upgrades.component.html',
  styleUrls: ['./upgrades.component.css']
})
export class UpgradesComponent implements OnInit {

  customers : Customer[] = [];
  totalUpgrades =0;
  keyword = "";

  constructor(private custService : CustomerService) { }

  ngOnInit(): void {
    this.getUpgradedCust();
  }

  getUpgradedCust(){
    this.custService.getAllCustomer().subscribe(data => 
      {
        this.customers = data.filter((e) => {
          if(e.firstName.toLowerCase().includes(this.keyword.toLowerCase())){
            return e.status === "Upgrade";
          }else{
            return null;
          }
      });
        this.totalUpgrades = this.customers.length;
      });
  }

}
