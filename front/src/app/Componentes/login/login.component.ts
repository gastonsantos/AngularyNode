import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from '../../SERVICES/usuarios.service';
import { Usuario } from 'src/app/Model/Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  
})
 
export class LoginComponent implements OnInit {

  constructor(  private UsuariosService: UsuariosService,
    private Router: Router) { }
    
   
    usuario ={

      id: '',
      name: '',
      email: '',
      password: '',
      
    }


  

ngOnInit(): void {
}

LogearUsuario(){
  this.UsuariosService.LogUsuario(this.usuario).subscribe(
    (res:any)=>{
      console.log(res);
      localStorage.setItem('secret', res.token);
      //this.usuarioTest = <any>res;
      this.Router.navigate(['./inicio']);
    }
  )
};


}
