import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Model/Usuario';
import { UsuariosService } from '../../SERVICES/usuarios.service';
import { EquipoService, Pokemon } from '../../SERVICES/equipo.service';
import { Router } from '@angular/router';
import decode from 'jwt-decode';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  //Variable
usuario ={

  id: '',
  name: '',
  email: '',
  password: '',
  
}
carrito={
  cantidad: 0,
  id: 0,
}

 

  constructor(
    private EquipoService: EquipoService,
    private UsuariosService: UsuariosService,
    private Router: Router ) { }
   

  ngOnInit(): void {
    this.getSession();
    this.getCantidad();
  }

  getSession(){
    var token = (localStorage.getItem('secret')!);
    var  decoded:any = decode(token);
    this.usuario.id = decoded.id;
    this.usuario.name = decoded.name;
    this.usuario.email = decoded.email;
    
    this.carrito.id = decoded.id;
    //console.log(decoded);
   
  }

 
  getLogout(){
    localStorage.removeItem('secret');
    this.Router.navigate(['./login']);
  }
/*
  getCarrito(id:string){
    
    const num = Number(this.usuario.id);

    this.Router.navigate(['./', 'carrito', num]);

  }
  */
  getCarrito(){
    const num = Number(this.usuario.id);
    this.EquipoService.getCarritoById(num).subscribe(
      res => {
        console.log(res);
        this.Router.navigate(['/carrito']);
      });  

  }
  getCantidad(){
    const num = Number(this.usuario.id);

    this.EquipoService.cantProdCarrito(num).subscribe( res => {
      console.log(res);
      this.carrito.cantidad = <number>res;
    }
    )



  }
  


}
