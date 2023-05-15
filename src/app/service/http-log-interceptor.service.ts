import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpLogInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any> ,next :HttpHandler){
    console.log('outcall')
    return next.handle(req).pipe(tap(event =>{
      console.log(event.type)
    }));
  }
}
