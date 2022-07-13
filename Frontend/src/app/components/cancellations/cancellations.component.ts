import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Model/customer';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-cancellations',
  templateUrl: './cancellations.component.html',
  styleUrls: ['./cancellations.component.css']
})
export class CancellationsComponent implements OnInit {

  customers : Customer[] = [];
  totalCancelled = 0;
  keyword = "";

  constructor(private custService : CustomerService) { }

  ngOnInit(): void {
    this.getCancelCust();
  }

  getCancelCust(){
    this.custService.getAllCustomer().subscribe(data => 
      {
        this.customers = data.filter((e) => {
          if(e.firstName.toLowerCase().includes(this.keyword.toLowerCase())){
            return e.status === "Cancellation";
          }else{
            return null;
          }
      });
        this.totalCancelled = this.customers.length;
      });
  }
}
