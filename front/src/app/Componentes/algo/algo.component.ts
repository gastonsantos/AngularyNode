import { Component, OnInit } from '@angular/core';
//import { UsuarioService, Usuario } from '../../SERVICES/equipo.service';
import { Router } from '@angular/router';
import { UsuariosService, Usuario } from '../../SERVICES/usuarios.service';
 
@Component({
  selector: 'app-algo',
  templateUrl: './algo.component.html',
  styleUrls: ['./algo.component.css']
})



export class AlgoComponent implements OnInit {
  constructor(  private UsuariosService: UsuariosService,
    private Router: Router ) {
    }
    
  Usuario: Usuario = {
    id: '',
    name: '',
    email: '',
    password: ''

  };
  

ngOnInit(): void {
}

agregarUsuario(){
  this.UsuariosService.addUsuario(this.Usuario).subscribe(res=>
    console.log(res));
  this.Router.navigate(['/inicio']);
}


}
