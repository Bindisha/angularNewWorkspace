import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class HttpInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any> ,next :HttpHandler){

    console.log(req.headers)
    let modifedreq=req.clone({headers: req.headers.append('comp','book')})
    console.log(modifedreq.headers)
    return next.handle(modifedreq);
  }

}
