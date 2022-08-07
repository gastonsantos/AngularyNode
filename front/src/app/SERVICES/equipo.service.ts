import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //para hacer peticiones PUT, DELETE, GET, POST, ETC
import { Observable } from 'rxjs';
//const cognito = require('../../back/router.js');
//import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  [x: string]: any;
   url = 'http://localhost:3000/carrito';
   url1 = 'http://localhost:3000/pokemones/';
   //url1= '/pokemones';
   //url= '/carrito';
   //url1= '/api';
  constructor(private http: HttpClient) { }

  //get pokemones
  getPokemones(): Observable<any>{

    return this.http.get(this.url1);

  }
  //get pokemon by id
  getPOkemonById(id: string){
    return this.http.get(this.url1 + '/' + id);
  }
  //add pokemon
  addPokemon(pokemon: any){
    return this.http.post(this.url1, pokemon);
  }
  //update pokemon
  updatePokemon(id: string, pokemon: any){
    return this.http.put(this.url1 + '/' + id, pokemon);
  }
  //delete pokemon
  deletePokemon(id: string){
    return this.http.delete(this.url1 + '/' + id);
  }
   //envio archivo/foto
 sendPost(body:FormData): Observable<any>{//body:FormData archivos, enviar archivos
  return this.http.post(this.url1+'/upload',body);
}
//otengo carrito
/*
  getCarritoById(id: number){
    return this.http.get(this.url + '/getCarrito' +'/'+ id);
  }
  */
  getCarritoById(id_usuario: number){
    return this.http.post(this.url + '/getCarrito', {id_usuario});
  }

  addCarrito(id_pokemon: string,id_usuario: number, precio: number){
    return this.http.post(this.url + '/addCarrito',{id_pokemon,id_usuario, precio});
  }
  
  
  sumProdCarrito(id_usuario: number){
    return this.http.post(this.url + '/sumProdCarrito', {id_usuario});
  }
  cantProdCarrito(id: number){
    return this.http.get(this.url + '/cantgetCarrito' +'/'+ id);
  }

  deleteFromCarrito(id: number){
    return this.http.delete(this.url + '/deleteCarrito' +'/'+ id);
  }


  


 


}

export interface Pokemon {
  id : string;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;

}

export interface Carrito{
  id_carrito: string;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  total: string;

}





