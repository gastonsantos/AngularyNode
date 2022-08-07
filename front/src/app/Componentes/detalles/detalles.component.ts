import { Component, OnInit } from '@angular/core';
import { EquipoService, Pokemon } from '../../SERVICES/equipo.service';
import { Router, ActivatedRoute } from '@angular/router';
import decode from 'jwt-decode';
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {


  constructor(private EquipoService: EquipoService, 
    private Router: Router,
    private ActivatedRoute: ActivatedRoute,) { }


    Pokemon: Pokemon = {
      id: '',
      nombre:'',
      descripcion:'',
      precio: 0,
      imagen :''
    };
    usuario ={

      id: '',
      name: '',
      email: '',
      password: '',
      
    }
  ngOnInit(): void {
    this.getSession();

    const id_entrada = this.ActivatedRoute.snapshot.params.id;
    console.log('id_entrada: ', +id_entrada);

    if(id_entrada != null){
      this.EquipoService.getPOkemonById(id_entrada).subscribe(
        res=>{
          
          //this.Pokemon = <any>res;
          
          const data = JSON.stringify(res);//convertir a string
          const datos = JSON.parse(data); //convertir a objeto

          this.Pokemon.nombre = <string>datos[0].nombre;//asignar el nombre
          this.Pokemon.id = <string>datos[0].id;//asignar el id
          this.Pokemon.descripcion = <string>datos[0].descripcion;//asignar la altura
          this.Pokemon.precio = <number>datos[0].precio;//asignar el peso
         
          this.Pokemon.imagen = <string>datos[0].imagen;//la imagen
          
          
          //this.Pokemon.nombre = "Gaston"; 
          console.log(res);
          
          
        },
      );
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
  addCarrito(id_pokemon: string,id_usuario: string, precio: number){

    let idUser = parseInt(id_usuario);
   this.EquipoService.addCarrito(id_pokemon,idUser, precio).subscribe(
    res => {
      this.Router.navigate(['./', 'carrito']);
      console.log(res);
    }
  )

}


}
