import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpsGenericService {

  constructor(private httpCalls: HttpClient) { }


  getListofBooks(): Observable<any> {

    return this.httpCalls.get('http://localhost:8080/api/v1/library');
  }

}
