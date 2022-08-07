import { Component, OnInit } from '@angular/core';
import { EquipoService, Pokemon } from '../../SERVICES/equipo.service';
import { UsuariosService  } from '../../SERVICES/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {

  private fileTmp : any;

  Pokemon: Pokemon = {
    id: '',
    nombre:'',
    descripcion:'',
    precio:0,
    imagen:''
   
  };

  constructor(private EquipoService: EquipoService, private Router: Router, private UsuariosService: UsuariosService) { }

  

  ngOnInit(): void {
  }

  getFile($event: any): void{
    const [ file ] = $event.target.files;
    this.fileTmp = {
      fileRaw: file, //archivo puro
      fileName: file.name, //nombre del archivo
    }
  }
  sendFile(): void{
    const body = new FormData();
    body.append('myFile', this.fileTmp.fileRaw, this.fileTmp.fileName);
    this.EquipoService.sendPost(body).subscribe(res => console.log(res)
   
    )};



      agregarPokemon(){
      
        this.EquipoService.addPokemon(this.Pokemon).subscribe(
          res => {
            console.log(res);
            this.Router.navigate(['/inicio']);
          });  
          this.sendFile();
    }
    

  }

