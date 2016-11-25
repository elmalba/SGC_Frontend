import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ColegiosComponent } from './sistema/ficha/colegios/colegios.component';

import { AppRoutingModule }     from './app-routing.module';
import { CrearColegioComponent } from './sistema/ficha/colegios/crear-colegio/crear-colegio.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ColegiosComponent,
    CrearColegioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
