import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  intercept(req : import('@angular/common/http').HttpRequest<any>, next: import('@angular/common/http').HttpHandler): import('rxjs').Observable<import('@angular/common/http').HttpEvent<any>> {
    const token = localStorage.getItem('token');
    const tokenHeader = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}` //se pone Bearer por temas de estandar y porq cuenta apartir de la 7ma posicion
      
      }
    });
    return next.handle(tokenHeader);
  }
    
  constructor() { }
}
