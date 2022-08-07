import { Component, OnInit } from '@angular/core';
import { EquipoService, Pokemon, Carrito } from '../../SERVICES/equipo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../../SERVICES/usuarios.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { variable } from '@angular/compiler/src/output/output_ast';
import decode from 'jwt-decode';
//import { send } from 'process';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})

export class CarritoComponent implements OnInit {
  Pokemones: Pokemon[] = [];
  Carrito: Carrito[]=[];
  total : string;

  usuario ={

    id: '',
    name: '',
    email: '',
    password: '',
    
  }
  
  constructor(private EquipoService: EquipoService,
    private Router: Router, 
    private ActivatedRoute: ActivatedRoute, 
    private UsioarioService: UsuariosService) {}


  ngOnInit(): void {
    this.getSession();
    const id_entrada = this.ActivatedRoute.snapshot.params.id;
    let idUser = parseInt(this.usuario.id);
    
    
    
    this.sumaDelCarrito(idUser);
    this.traerCarrito(idUser);
   
  }
  
  sumaDelCarrito(id_entrada: number){
    this.EquipoService.sumProdCarrito(id_entrada).subscribe(
      res => {
        
        console.log(res);
       
        this.Carrito =  <any>res;
        this.total = this.Carrito[0].total;
        //his.cart = <any>res;
      }
    )

  }
  traerCarrito(id_entrada: number){
    if(id_entrada != null){
      this.EquipoService.getCarritoById(id_entrada).subscribe(
        res=>{
          
          //this.Pokemon = <any>res;
          
          //const data = JSON.stringify(res);//convertir a string
          //const datos = JSON.parse(data); //convertir a objeto
          this.Carrito = <any>res;
          this.Pokemones = <any>res;
          console.log(res);
        
        },
      )
        }
  }
 

  getSession(){
    var token = (localStorage.getItem('secret')!);
    var  decoded:any = decode(token);
    this.usuario.id = decoded.id;
    this.usuario.name = decoded.name;
    this.usuario.email = decoded.email;
    
    //console.log(decoded);
   
  }


  deleteFromCarrito(id_Carrito: string){
    let id_pok = parseInt(id_Carrito);
    this.EquipoService.deleteFromCarrito(id_pok).subscribe(
     res => {
       //this.Router.navigate(['./', 'carrito'/*,id_pok*/]);

       let idUser = parseInt(this.usuario.id);
       this.traerCarrito(idUser);

       console.log(res);
     }
   )
    }
  }


