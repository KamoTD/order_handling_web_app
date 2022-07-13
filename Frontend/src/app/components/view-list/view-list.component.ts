import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { count } from 'rxjs';
import { CustomerService } from 'src/app/Services/customer.service';
import { Customer } from 'src/app/Model/customer';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {

  customers : Customer[] = []; 

  filter = {
    keyword : ""
  }

  totalOrders = 0;

  constructor(private custService : CustomerService) { }

  ngOnInit(): void {
    
    this.getAllCustomer();
  }

  getAllCustomer(){
    this.custService.getAllCustomer()
    .subscribe(data => 
      {
        this.customers = data.filter((e) => {
          return e.firstName.toLowerCase().includes(this.filter.keyword.toLowerCase())
      });
      this.totalOrders = this.customers.length;
      });
  }

  deleteCustomer(id : number){
    this.custService.deleteCustomer(id).subscribe(data => {
        alert("Deleted Successfully");
        this.getAllCustomer();
    });
  }

}
