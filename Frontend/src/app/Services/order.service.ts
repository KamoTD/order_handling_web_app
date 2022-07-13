import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../Model/order';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private _url = "http://localhost:8088/api/orders";

  constructor(private http : HttpClient) { }

  getAllOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(this._url);
  }

  saveOrder(order : Order) : Observable<Order>{
    return this.http.post<Order>(this._url,order);
  }
}
