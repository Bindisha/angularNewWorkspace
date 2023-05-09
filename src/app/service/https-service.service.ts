import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Library } from '../entity/library';

@Injectable({
  providedIn: 'root'
})
export class HttpsGenericService {

  constructor(private httpCalls: HttpClient) { }

  getListofBooks(): Observable<any> {

    return this.httpCalls.get('http://localhost:8080/api/v1/library');
  }

  viewBookById(id:number): Observable<any> {  
    return this.httpCalls.get(`${'http://localhost:8080/api/v1/library'}/${id}`);  
  }
   
  deleteBook(id: number): Observable<any> {  
    return this.httpCalls.delete(`${'http://localhost:8080/api/v1/library'}/${id}`);  
  }  

}
