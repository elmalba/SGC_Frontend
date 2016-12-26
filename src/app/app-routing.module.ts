import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RootComponent } from './root.component';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

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
////Asignar Profesor
import { AsignarProfComponent } from './libros/cursos/asignar-prof/asignar-prof.component';

//Profesor
import { ProfesorComponent } from './libros/profesor/profesor.component';
import { CrearProfesorComponent } from './libros/profesor/crear-profesor/crear-profesor.component';



const routes: Routes = [
	{ path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  { path: 'dashboard', component: DashboardComponent },

	{ path: 'sistema/ficha/colegios',  component: ColegiosComponent,
    children: [
      { path: '', redirectTo: 'ver-colegios', pathMatch: 'full' },
      { path: 'ver-colegios',  component: VerColegioComponent },
      { path: 'ver-colegios/:id',  component: ColegioDetailComponent },
      { path: 'crear-colegio',  component: CrearColegioComponent },
      { path: 'editar-colegio/:id',  component: EditarColegioComponent },
    ]
	},

  { path: 'sistema/ficha/matriculas',  component: MatriculaComponent,
    children: [
      { path: '', redirectTo: 'ver-matriculas', pathMatch: 'full'},
      { path: 'ver-matriculas',  component: VerMatriculaComponent },
      { path: 'ver-matriculas/:id',  component: MatriculaDetailComponent },
      { path: 'crear-matricula',  component: CrearMatriculaComponent },
      { path: 'editar-matricula/:id',  component: EditarMatriculaComponent },
    ]
  },

  { path: 'libros',  component: CursosComponent,
    children: [
      { path: '', redirectTo: 'ver-cursos', pathMatch: 'full' },
      { path: 'ver-cursos', component: VerCursoComponent },
      { path: 'crear-curso',  component: CrearCursoComponent },
      { path: 'ver-cursos/:id',  component: CursoDetailComponent,
        children: [
          { path:'', redirectTo:'lista',pathMatch: 'full'},
          { path: 'lista', component: CursoListaComponent },
          { path: 'notas', component: CursoNotasComponent,
            children: [
              { path: '', redirectTo: 'ver' ,pathMatch: 'full' },
              { path:'ver', component: CursoNotasVerComponent},
              { path:'ingresar', component: CursoNotasIngresarComponent},
            ]
          },
          { path: 'asistencia', component: CursoAsistenciaComponent,
            children: [
              { path: '', redirectTo: 'ver' ,pathMatch: 'full' },
              { path:'ver', component: CursoAsistenciaVerComponent},
              { path:'ingresar', component: CursoAsistenciaIngresarComponent},
            ]
          },
          { path: 'anotaciones', component: CursoAnotacionesComponent,
            children: [
              { path: '', redirectTo: 'ver' ,pathMatch: 'full' },
              { path:'ver', component: CursoAnotacionesVerComponent},
              { path:'ingresar', component: CursoAnotacionesIngresarComponent},
            ]
          },

        ]
      },
      { path: ':id/asignar-prof',  component: AsignarProfComponent },
      { path: 'editar-curso/:id',  component: ModificarCursoComponent },
      // { path: 'profesor/crear-profesor',  component: CrearProfesorComponent },
    ]
  },
];

const rootRoutes: Routes = [
  { path: '', redirectTo: 'app', pathMatch: 'full'},
  { path: 'app', component: AppComponent, children: routes },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(rootRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
