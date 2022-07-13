import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Model/customer';
import { CustomerService } from 'src/app/Services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ParamMap } from '@angular/router';


@Component({
  selector: 'app-create-list',
  templateUrl: './create-list.component.html',
  styleUrls: ['./create-list.component.css']
})
export class CreateListComponent implements OnInit {

  customers: Customer = new Customer();

  constructor(private custService : CustomerService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      
        let isPresent = params.has('id');

        if(isPresent){
          let id : any = params.get('id');
          this.custService.getCustomer(id).subscribe(data => 
            {
              this.customers = data;
            });
        }
    });
    
  }

  addOrder(){
    if((this.customers.contactNo).toString().length!=10){
      alert("Unable to add this order please verify the information");
    }
    else{
    this.custService.addCustomer(this.customers)
    .subscribe(data => {
      this.router.navigateByUrl('/view-list');
      alert("Order added successfully");
    });
  }
}

}
