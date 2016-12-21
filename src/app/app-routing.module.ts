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

import { CursosComponent } from './libros/cursos/cursos.component';
import { CrearCursoComponent } from './libros/cursos/crear-curso/crear-curso.component';
import { VerCursoComponent } from './libros/cursos/ver-curso/ver-curso.component';
import { ModificarCursoComponent } from './libros/cursos/modificar-curso/modificar-curso.component';
import { EliminarCursoComponent } from './libros/cursos/eliminar-curso/eliminar-curso.component';

import { AsignaturasComponent } from './libros/asignaturas/asignaturas.component';
import { CrearAsignaturaComponent } from './libros/asignaturas/crear-asignatura/crear-asignatura.component';
import { VerAsignaturaComponent } from './libros/asignaturas/ver-asignatura/ver-asignatura.component';
import { ModificarAsignaturaComponent } from './libros/asignaturas/modificar-asignatura/modificar-asignatura.component';
import { EliminarAsignaturaComponent } from './libros/asignaturas/eliminar-asignatura/eliminar-asignatura.component';

import { ProfesorComponent } from './libros/profesor/profesor.component';
import { CrearProfesorComponent } from './libros/profesor/crear-profesor/crear-profesor.component';

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

  { path: 'libros',  component: CursosComponent },
  { path: 'libros/crear-curso',  component: CrearCursoComponent },
  { path: 'libros/ver-curso/:id',  component: VerCursoComponent },
  { path: 'libros/profesor/crear-profesor',  component: CrearProfesorComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
