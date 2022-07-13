import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/Model/customer';
import { CustomerService } from 'src/app/Services/customer.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {

  customer : Customer = new Customer();
  
  constructor(private custService : CustomerService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params : ParamMap) =>{
      let isPresent = params.has('id');

        if(isPresent){
          let id : any = params.get('id');
          this.custService.getCustomer(id).subscribe(data => 
            {
              this.customer = data;
            });
        }
    });
  }

  // goPrev(){
  //   let prevId = this.custId - 1;
  //   this.router.navigate(['/view-list-detail',prevId]);
  // }

  // goNext(){
  //   let nextId = this.custId + 1;
  //   this.router.navigate(['/view-list-detail', nextId]);
  // }

}
