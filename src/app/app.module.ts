import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import './rxjs-extensions';

import { FilterCursoProf } from './pipes/filter-curso-prof.pipe';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { ColegiosComponent } from './sistema/ficha/colegios/colegios.component';
import { CrearColegioComponent } from './sistema/ficha/colegios/crear-colegio/crear-colegio.component';
import { EditarColegioComponent } from './sistema/ficha/colegios/editar-colegio/editar-colegio.component';

import { MatriculaComponent } from './sistema/ficha/matricula/matricula.component';
import { CrearMatriculaComponent } from './sistema/ficha/matricula/crear-matricula/crear-matricula.component';
import { EditarMatriculaComponent } from './sistema/ficha/matricula/editar-matricula/editar-matricula.component';

import { ColegiosService } from './services/sistema/ficha/colegios.service';
import { MatriculaService } from "./services/sistema/ficha/matricula.service";
import { VerColegioComponent } from './sistema/ficha/colegios/ver-colegio/ver-colegio.component';
import { VerMatriculaComponent } from './sistema/ficha/matricula/ver-matricula/ver-matricula.component';

import { CursosComponent } from './libros/cursos/cursos.component';
import { CrearCursoComponent } from './libros/cursos/crear-curso/crear-curso.component';
import { VerCursoComponent } from './libros/cursos/ver-curso/ver-curso.component';
import { ModificarCursoComponent } from './libros/cursos/modificar-curso/modificar-curso.component';
import { EliminarCursoComponent } from './libros/cursos/eliminar-curso/eliminar-curso.component';
import { AsignarProfComponent } from './libros/cursos/asignar-prof/asignar-prof.component';

import { AsignaturasComponent } from './libros/asignaturas/asignaturas.component';
import { CrearAsignaturaComponent } from './libros/asignaturas/crear-asignatura/crear-asignatura.component';
import { VerAsignaturaComponent } from './libros/asignaturas/ver-asignatura/ver-asignatura.component';
import { ModificarAsignaturaComponent } from './libros/asignaturas/modificar-asignatura/modificar-asignatura.component';
import { EliminarAsignaturaComponent } from './libros/asignaturas/eliminar-asignatura/eliminar-asignatura.component';

import { ProfesorComponent } from './libros/profesor/profesor.component';
import { CrearProfesorComponent } from './libros/profesor/crear-profesor/crear-profesor.component';
import {CursosService} from "./services/libros/cursos.service";
import {ProfesoresService} from "./services/libros/profesores.service";
import {AsignaturasService} from "./services/libros/asignaturas.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ColegiosComponent,
    CrearColegioComponent,
    EditarColegioComponent,
    MatriculaComponent,
    CrearMatriculaComponent,
    EditarMatriculaComponent,
    VerColegioComponent,
    VerMatriculaComponent,
    CursosComponent,
    AsignaturasComponent,
    CrearCursoComponent,
    VerCursoComponent,
    ModificarCursoComponent,
    EliminarCursoComponent,
    CrearAsignaturaComponent,
    VerAsignaturaComponent,
    ModificarAsignaturaComponent,
    EliminarAsignaturaComponent,
    ProfesorComponent,
    CrearProfesorComponent,
    FilterCursoProf,
    AsignarProfComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2Bs3ModalModule
  ],
  providers: [
    ColegiosService,
    MatriculaService,
    CursosService,
    ProfesoresService,
    AsignaturasService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
