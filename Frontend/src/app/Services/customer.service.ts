import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../Model/customer';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private api_url = "http://localhost:8080/api/customers";

  constructor(private http : HttpClient) { }

  getAllCustomer() : Observable<Customer[]>{

    return this.http.get<Customer[]>(this.api_url);
  }

  addCustomer(customer : Customer) : Observable<Customer>{

    return this.http.post<Customer>(this.api_url, customer);
  }

  getCustomer(id : number) : Observable<Customer>{

    return this.http.get<Customer>(`${this.api_url}/${id}`);
  }

  deleteCustomer(id : number) : Observable<any>{
    
    return this.http.delete<any>(`${this.api_url}/${id}`);
  }

}
