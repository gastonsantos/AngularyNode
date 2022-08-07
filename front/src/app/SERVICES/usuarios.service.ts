
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  [x: string]: any;
  
  url = 'http://localhost:3000/usuarios';
  constructor(private http: HttpClient, 
    private jwtHelpers: JwtHelperService) { }

addUsuario(Usuario: any){
  return this.http.post(this.url +'/registrer', Usuario);
}

LogUsuario(Usuario:any){

  return this.http.post(this.url +'/loggearse', Usuario);
}

isAuth(): boolean{ 

  const token = localStorage.getItem('secret');
  if(this.jwtHelpers.isTokenExpired('secret') || !localStorage.getItem('secret')){
    return false;
     }
 return true;
 }
/*
getSession() {
  return this.http.get(this.url);
}
*/
logout(){
  return this.http.get(this.url +'/logout');
}



}

export interface Usuario{
  id?: string;
  name?: string;
  email?: string;
  password?: string;

}
