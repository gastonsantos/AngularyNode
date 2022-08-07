import { Component, OnInit } from '@angular/core';
import { EquipoService, Pokemon } from '../../SERVICES/equipo.service';
import { UsuariosService } from '../../SERVICES/usuarios.service';
import { Usuario } from 'src/app/Model/Usuario';
import { Router } from '@angular/router';
import decode from 'jwt-decode';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
 
})
export class InicioComponent implements OnInit {

  //Variable
  Pokemones: Pokemon[] = [];
  usuario ={

    id: '',
    name: '',
    email: '',
    password: '',
    
  }
  
  
  constructor(private EquipoService: EquipoService,
    private Router: Router, 
    private UsuariosService: UsuariosService
   ) {}
   

  ngOnInit(): void {
    this.listarPokemones();
    this.getSession();
    
  }

  getSession(){
        
    var token = (localStorage.getItem('secret')!);
    var  decoded:any = decode(token);
    this.usuario.id = decoded.id;
    this.usuario.name = decoded.name;
    this.usuario.email = decoded.email;

    //console.log(decoded);
 
  }

  listarPokemones(){
    
    this.EquipoService.getPokemones().subscribe(
      res => {
        
        console.log(res);
        this.Pokemones = <any>res;
      }
    )
  }

  modificar(id:string){
    this.Router.navigate(['./', 'modificar', id]);
  }
  
  
 
  eliminar(id:string){
    //let ids = parseInt(id);
    this.EquipoService.deletePokemon(id).subscribe(
      res => {
        console.log(res);
        this.listarPokemones();
      }
    )
  }
  addCarrito(id_pokemon: string,id_usuario: string, precio: number){

      let idUser = parseInt(id_usuario);
     this.EquipoService.addCarrito(id_pokemon,idUser, precio).subscribe(
      res => {
        this.Router.navigate(['./', 'carrito', idUser]);
        console.log(res);
      }
    )

  }
 



}
