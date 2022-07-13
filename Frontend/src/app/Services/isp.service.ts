import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Isp } from '../Model/isp';
import { ThisReceiver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class IspService {

  private _url = "http://localhost:8080/api/isp";

  constructor(private http : HttpClient) { }

  getAllISP() : Observable<Isp[]>{
    return this.http.get<Isp[]>(this._url);
  }

  saveISPData(isp : Isp) : Observable<Isp>{
    return this.http.post<Isp>(this._url, isp);
  }
}
