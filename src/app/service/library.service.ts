import { Injectable } from '@angular/core';
import { HttpsGenericService } from './https-service.service';
import { Observable } from 'rxjs';
import { Library } from '../entity/library';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibraryService extends HttpsGenericService {




  server_url = "http://localhost:8080/api/v1/library";

  public getAllBooks(): Observable<any> {
    return this.getAllDetails(this.server_url);
  }

  public getAllBooksBasedOnParams(title:string): Observable<any> {
    const params = new HttpParams().append('title',title)
    return this.getAllDetailsByParams(this.server_url,params);
  }

  public getBookById(id:number): Observable<any> {
    return this.getById(this.server_url,id);
  }

  public saveBook(book:any): Observable<any> {
    return this.saveData(this.server_url,book);
  }

  public editBook(book:Library,id:number): Observable<any> {
    return this.updateData(this.server_url,book,id);
  }

  public deleteBookById(id:number): Observable<any> {
    return this.deleteById(this.server_url,id);
  }

}
