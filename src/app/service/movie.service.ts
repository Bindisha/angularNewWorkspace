import { Injectable } from '@angular/core';
import { HttpsGenericService } from './https-service.service';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieService extends HttpsGenericService {

  server_url = "http://localhost:8081/api/v1/movie";

  public getAllBooks(): Observable<any> {
    return this.getAllDetails(this.server_url);
  }

  public getBookById(id:number): Observable<any> {
    return this.getById(this.server_url,id);
  }

  public saveBook(book:any): Observable<any> {
    return this.saveData(this.server_url,book);
  }

  public editBook(book:any,id:number): Observable<any> {
    return this.updateData(this.server_url,book,id);
  }

  public deleteBookById(id:number): Observable<any> {
    return this.deleteById(this.server_url,id);
  }
}
