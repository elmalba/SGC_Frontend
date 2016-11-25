import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ColegiosComponent } from './sistema/ficha/colegios/colegios.component';
import { CrearColegioComponent } from './sistema/ficha/colegios/crear-colegio/crear-colegio.component';


const routes: Routes = [
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	{ path: 'sistema/ficha/colegios',  component: ColegiosComponent },
	{ path: 'sistema/ficha/colegios/crear',  component: CrearColegioComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}