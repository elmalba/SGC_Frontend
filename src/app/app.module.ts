import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import './rxjs-extensions';

//pipes
import { FilterCursoProf } from './pipes/filter-curso-prof.pipe';
import { CalcPromedio } from './pipes/calc-promedio.pipe';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';
import { AbbreviatePipe } from './pipes/abbreviate.pipe'

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { RootComponent } from './root.component';
import { LoginComponent } from './login/login.component';

//Dashboard
import { DashboardComponent } from './dashboard/dashboard.component';

//Sistema
////Colegios
import { ColegiosComponent } from './sistema/ficha/colegios/colegios.component';
import { CrearColegioComponent } from './sistema/ficha/colegios/crear-colegio/crear-colegio.component';
import { EditarColegioComponent } from './sistema/ficha/colegios/editar-colegio/editar-colegio.component';
import { VerColegioComponent } from './sistema/ficha/colegios/ver-colegio/ver-colegio.component';
import { ColegioDetailComponent } from './sistema/ficha/colegios/colegio-detail/colegio-detail.component';
////Matriculas
import { MatriculaComponent } from './sistema/ficha/matricula/matricula.component';
import { CrearMatriculaComponent } from './sistema/ficha/matricula/crear-matricula/crear-matricula.component';
import { EditarMatriculaComponent } from './sistema/ficha/matricula/editar-matricula/editar-matricula.component';
import { VerMatriculaComponent } from './sistema/ficha/matricula/ver-matricula/ver-matricula.component';
import { MatriculaDetailComponent } from './sistema/ficha/matricula/matricula-detail/matricula-detail.component';

//Libros
import { CursosComponent } from './libros/cursos/cursos.component';
import { CrearCursoComponent } from './libros/cursos/crear-curso/crear-curso.component';
import { VerCursoComponent } from './libros/cursos/ver-curso/ver-curso.component';
import { ModificarCursoComponent } from './libros/cursos/modificar-curso/modificar-curso.component';
import { CursoDetailComponent } from './libros/cursos/curso-detail/curso-detail.component';
////Lista
import { CursoListaComponent } from './libros/cursos/curso-lista/curso-lista.component';
////Notas
import { CursoNotasComponent } from './libros/cursos/curso-notas/curso-notas.component';
import { CursoNotasVerComponent } from './libros/cursos/curso-notas/curso-notas-ver/curso-notas-ver.component';
import { CursoNotasIngresarComponent } from './libros/cursos/curso-notas/curso-notas-ingresar/curso-notas-ingresar.component';
////Asistencia
import { CursoAsistenciaComponent } from './libros/cursos/curso-asistencia/curso-asistencia.component';
import { CursoAsistenciaVerComponent } from './libros/cursos/curso-asistencia/curso-asistencia-ver/curso-asistencia-ver.component';
import { CursoAsistenciaIngresarComponent } from './libros/cursos/curso-asistencia/curso-asistencia-ingresar/curso-asistencia-ingresar.component';
////Anotaciones
import { CursoAnotacionesComponent } from './libros/cursos/curso-anotaciones/curso-anotaciones.component';
import { CursoAnotacionesVerComponent } from './libros/cursos/curso-anotaciones/curso-anotaciones-ver/curso-anotaciones-ver.component';
import { CursoAnotacionesIngresarComponent } from './libros/cursos/curso-anotaciones/curso-anotaciones-ingresar/curso-anotaciones-ingresar.component';
import { CursoAnotacionesVerGenComponent } from './libros/cursos/curso-anotaciones/curso-anotaciones-ver-gen/curso-anotaciones-ver-gen.component';
////Asignar Profesor
import { AsignarProfComponent } from './libros/cursos/asignar-prof/asignar-prof.component';

//Profesor
import { ProfesorComponent } from './libros/profesor/profesor.component';
import { CrearProfesorComponent } from './libros/profesor/crear-profesor/crear-profesor.component';

//Servicios
import { MatriculaService } from "./services/sistema/ficha/matricula.service";
import {ColegiosService } from './services/sistema/ficha/colegios.service';
import {CursosService} from "./services/libros/cursos.service";
import {ProfesoresService} from "./services/libros/profesores.service";
import {AsignaturasService} from "./services/libros/asignaturas.service";
import {NotasService} from "./services/libros/notas.service";
import {AnotacionesService} from './services/libros/anotaciones.service';
import {DpaService} from './services/sistema/dpa.service'




@NgModule({
  declarations: [
    RootComponent,
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ColegiosComponent,
    CrearColegioComponent,
    EditarColegioComponent,
    MatriculaComponent,
    CrearMatriculaComponent,
    EditarMatriculaComponent,
    VerColegioComponent,
    VerMatriculaComponent,
    CursosComponent,
    CrearCursoComponent,
    VerCursoComponent,
    ModificarCursoComponent,
    ProfesorComponent,
    CrearProfesorComponent,
    AsignarProfComponent,
    ColegioDetailComponent,
    MatriculaDetailComponent,
    CursoDetailComponent,
    CursoNotasComponent,
    CursoListaComponent,
    CursoAsistenciaComponent,
    CursoAnotacionesComponent,
    CursoNotasVerComponent,
    CursoNotasIngresarComponent,
    CursoAsistenciaVerComponent,
    CursoAsistenciaIngresarComponent,
    CursoAnotacionesVerComponent,
    CursoAnotacionesVerGenComponent,
    CursoAnotacionesIngresarComponent,
    FilterCursoProf,
    CalcPromedio,
    TruncateTextPipe,
    AbbreviatePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2Bs3ModalModule,
  ],
  providers: [
    DpaService,
    ColegiosService,
    MatriculaService,
    CursosService,
    ProfesoresService,
    AsignaturasService,
    NotasService,
    AnotacionesService,
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
