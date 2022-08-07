import { Component, OnInit } from '@angular/core';
import { EquipoService, Pokemon } from '../../SERVICES/equipo.service';
import { Router, ActivatedRoute } from '@angular/router';


//import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
 
})
export class ModificarComponent implements OnInit {
  Pokemon: Pokemon = {
    id: '',
    nombre:'',
    descripcion:'',
    precio: 0,
    imagen :''
  };
  
 

  constructor(private EquipoService: EquipoService, 
    private Router: Router,
    private ActivatedRoute: ActivatedRoute, 
    ) { 

    }
  ngOnInit(): void {
    

    const id_entrada = this.ActivatedRoute.snapshot.params.id;
    console.log('id_entrada: ', +id_entrada);

    if(id_entrada != null){
      this.EquipoService.getPOkemonById(id_entrada).subscribe(
        res=>{
          
          //this.Pokemon = <any>res;
          
          const data = JSON.stringify(res);//convertir a string
          const datos = JSON.parse(data); //convertir a objeto

          this.Pokemon.nombre = <string>datos[0].nombre;//asignar el nombre
        
          this.Pokemon.descripcion = <string>datos[0].descripcion;//asignar la altura
          this.Pokemon.precio = <number>datos[0].precio;//asignar el peso
         

          
          
          //this.Pokemon.nombre = "Gaston"; 
          console.log(res);
          
          
        },
      );
        }
        
    }
  

  modificarPokemon(){
    this.EquipoService.updatePokemon(this.Pokemon.id, this.Pokemon).subscribe(
      res => {
        console.log(res);
        this.Router.navigate(['/inicio']);
      }
    )
  }

}
