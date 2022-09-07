import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let tokenreq= req.clone({
      setHeaders:{
        'Content-Type': 'application/json',
        Authorization: 'Bearer 6d8e33bcc7d765da654c61de1d4151af'
      }
    })
    console.log(tokenreq)
    return next.handle(tokenreq);
  }
}
