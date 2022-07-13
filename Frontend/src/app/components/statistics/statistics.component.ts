import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Model/customer';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  customers : Customer[] = [];

  //By Estate
  count92oNnEW = 0;
  countWalford = 0;
  countPalmView = 0;
  countTribeca = 0;
  countWF = 0;
  countStatusU =0;
  countStatusC =0;

  //By ISP
  countAcc = 0;
  countHC = 0;
  countCI = 0;

  //By Package
  count20Mbps = 0;
  count50Mbps = 0;
  count100Mbps = 0;
  count200Mbps = 0;

  constructor(private custService : CustomerService) { }

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers(){
    this.custService.getAllCustomer().subscribe(data => 
      {
        this.customers = data;

        //Number of Orders Per Estate
        for(let x=0;x<this.customers.length;x++){
      
          if(this.customers[x].estateName.startsWith("92")){
            this.count92oNnEW++;
          }
          if(this.customers[x].estateName.startsWith("Wal")){
            this.countWalford++;
          }
          if(this.customers[x].estateName.startsWith("Pal")){
            this.countPalmView++;
          }
          if(this.customers[x].estateName.startsWith("Tri")){
            this.countTribeca++;
          }
          if(this.customers[x].estateName.startsWith("Water")){
            this.countWF++;
          }
          
        }

        //Status Count
        for(let x=0;x<this.customers.length;x++){
      
          if(this.customers[x].status === "Cancellation"){
            this.countStatusC++;
          }
          if(this.customers[x].status === "Upgrade"){
            this.countStatusU++;          }    
        }

        //ISP Count
        for(let x=0;x<this.customers.length;x++){
      
          if(this.customers[x].ispName.startsWith("Acc")){
            this.countAcc++;
          }
          if(this.customers[x].ispName.startsWith("Home")){
            this.countHC++;
          }
          if(this.customers[x].ispName.startsWith("Cool")){
            this.countCI++;
          }
        }

        //Package
        for(let x=0;x<this.customers.length;x++){
      
          if(this.customers[x].lineSpeed.startsWith("20")){
            this.count20Mbps++;
          }
          if(this.customers[x].lineSpeed.startsWith("50")){
            this.count50Mbps++;
          }
          if(this.customers[x].lineSpeed.startsWith("100")){
            this.count100Mbps++;
          }
          if(this.customers[x].lineSpeed.startsWith("200")){
            this.count200Mbps++;
          }
        }
     
      });
  }

}
