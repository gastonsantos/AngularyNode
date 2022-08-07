import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuariosService} from './SERVICES/usuarios.service';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Model/Usuario';
 //import { Usuario } from 'src/app/Model/usuario';
//import {Usuario} from  './Model/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  
})
export class AppComponent {
  constructor( private UsuariosService: UsuariosService,private Router: Router ) {
    
  }
 
  usuario : Usuario;
  ngOnInit(): void {

   
    //this.getSession();
    
  }
  getSession(){

  
  }



}

