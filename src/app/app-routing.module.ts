import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ColegiosComponent } from './sistema/ficha/colegios/colegios.component';
import { CrearColegioComponent } from './sistema/ficha/colegios/crear-colegio/crear-colegio.component';
import { EditarColegioComponent } from './sistema/ficha/colegios/editar-colegio/editar-colegio.component';
import { VerColegioComponent } from './sistema/ficha/colegios/ver-colegio/ver-colegio.component';

import { MatriculaComponent } from './sistema/ficha/matricula/matricula.component';
import { CrearMatriculaComponent } from './sistema/ficha/matricula/crear-matricula/crear-matricula.component';
import { EditarMatriculaComponent } from './sistema/ficha/matricula/editar-matricula/editar-matricula.component';
import { VerMatriculaComponent } from './sistema/ficha/matricula/ver-matricula/ver-matricula.component';


const routes: Routes = [
	//{ path: '**', redirectTo: '/', pathMatch: 'full' },
	{ path: 'sistema/ficha/colegios',  component: ColegiosComponent },
	{ path: 'sistema/ficha/colegios/crear-colegio',  component: CrearColegioComponent },
	{ path: 'sistema/ficha/colegios/editar-colegio/:id',  component: EditarColegioComponent },
  { path: 'sistema/ficha/colegios/ver-colegio/:id',  component: VerColegioComponent },

  { path: 'sistema/ficha/matriculas',  component: MatriculaComponent },
  { path: 'sistema/ficha/matriculas/crear-matricula',  component: CrearMatriculaComponent },
  { path: 'sistema/ficha/matriculas/editar-matricula/:id',  component: EditarMatriculaComponent },
  { path: 'sistema/ficha/matriculas/ver-matricula/:id',  component: VerMatriculaComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
