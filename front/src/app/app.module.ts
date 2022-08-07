import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { AgregarComponent } from './Componentes/agregar/agregar.component';
import { ModificarComponent } from './Componentes/modificar/modificar.component';

import { AlgoComponent } from './Componentes/algo/algo.component';
//importar httpClientModule
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//importar FormsModule
import { FormsModule } from '@angular/forms';
import { DetallesComponent } from './Componentes/detalles/detalles.component';
import { LoginComponent } from './Componentes/login/login.component';
import { MenuComponent } from './Componentes/menu/menu.component';
import { CarritoComponent } from './Componentes/carrito/carrito.component';

//providers
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';//permite verificar token del lado del servidor
import { TokenInterceptorService } from './SERVICES/token-interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AgregarComponent,
    ModificarComponent, 
    AlgoComponent, 
    DetallesComponent, 
    LoginComponent, 
    MenuComponent, CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    //JWT
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService,
    //token Interceptor
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
