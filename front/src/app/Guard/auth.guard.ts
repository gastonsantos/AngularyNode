import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from '../SERVICES/usuarios.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private UsuariosService: UsuariosService ) { }

    
  canActivate(): boolean {
   if(!this.UsuariosService.isAuth()){
    console.log('El token no es valido o ya expiro');
    return false;
   }

    return true;
  }
  
}
