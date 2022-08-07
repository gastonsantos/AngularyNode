import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuariosService } from '../SERVICES/usuarios.service';

import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {
  
  constructor(private UsuariosService: UsuariosService,
    public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {  
    
    const expectedRole = route.data.expectedRole;
    var token = (localStorage.getItem('secret')!);
    var  decoded = decode(token);
  
    console.log(decoded);

    if( !this.UsuariosService.isAuth() || name !== expectedRole){
      console.log('Usuario no autorizado para la vista');
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
  
}
