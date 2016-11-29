import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ColegiosComponent } from './sistema/ficha/colegios/colegios.component';

import { CrearColegioComponent } from './sistema/ficha/colegios/crear-colegio/crear-colegio.component';
import { EditarColegioComponent } from './sistema/ficha/colegios/editar-colegio/editar-colegio.component';

import { AppRoutingModule }     from './app-routing.module';
import {ColegiosService} from "./sistema/ficha/colegios.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ColegiosComponent,
    CrearColegioComponent,
    EditarColegioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ColegiosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
