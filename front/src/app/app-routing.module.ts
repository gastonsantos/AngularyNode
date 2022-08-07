import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Importo el componente que quiero que se muestre
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { AgregarComponent } from './Componentes/agregar/agregar.component';
import { ModificarComponent } from './Componentes/modificar/modificar.component';
import {AlgoComponent} from './Componentes/algo/algo.component';
import {MenuComponent} from './Componentes/menu/menu.component';
import { LoginComponent } from './Componentes/login/login.component';
import { CarritoComponent } from './Componentes/carrito/carrito.component';
import { AuthGuard } from './Guard/auth.guard';
import { RolesGuard } from './Guard/roles.guard';
import { DetallesComponent } from './Componentes/detalles/detalles.component';
//Aca agrego las rutas
const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'}, 
  {path: 'inicio', component: InicioComponent},
  {path: 'agregar', component: AgregarComponent},
 // {path: 'menu', component: MenuComponent,data: {expectedRol: 'admin'},canActivate: [AuthGuard, RolesGuard] },
  {path: 'menu', component: MenuComponent },
  {path: 'detalles/:id', component: DetallesComponent},
  {path: 'modificar/:id', component: ModificarComponent},
  {path: 'algo', component: AlgoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'carrito', component: CarritoComponent}
 // {path: 'carrito/:id', component: CarritoComponent, data: {expectedRol: 'admin'},canActivate: [AuthGuard, RolesGuard]  }, //esta esl guard que me permite verificar si el usuario esta logueado
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
