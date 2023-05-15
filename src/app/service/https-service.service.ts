import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Library } from '../entity/library';

@Injectable({
  providedIn: 'root'
})
export class HttpsGenericService {

  constructor(private httpCalls: HttpClient) { }

  httpHeader = new HttpHeaders({
    'Content-Type':'application/json',
    'Auth' : 'Test'
  })

  getAllDetails(url:string): Observable<any> {
    return this.httpCalls.get(url,{headers:this.httpHeader});
  }

  getAllDetailsByParams(url:string,getParams:HttpParams): Observable<any> {
    return this.httpCalls.get(url,{headers:this.httpHeader,params:getParams});
  }




  saveData(url:string,body:any): Observable<any> {
    return this.httpCalls.post(url,body,{headers:this.httpHeader});
  }

  getById(url:string,id:number): Observable<any> {
    return this.httpCalls.get(url+'/'+id,{headers:this.httpHeader});
  }

  deleteById(url:string,id:number): Observable<any> {
    return this.httpCalls.delete(url+'/'+id,{headers:this.httpHeader});
  }

  updateData(url:string,body:any,id:number): Observable<any> {
    return this.httpCalls.put(url+'/'+id,body,{headers:this.httpHeader});
  }

}
