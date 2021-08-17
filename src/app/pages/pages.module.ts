import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from './buscar/buscar.component';
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { PipesModule } from '../pipes/pipes.module';
import { ComponentsModule } from '../components/components.module';
import { CategoriasComponent } from './categorias/categorias.component';


@NgModule({
  declarations: [
    BuscarComponent,
    HomeComponent,
    PeliculaComponent,
    CategoriasComponent,
  ],
  imports: [
    CommonModule,
    PipesModule,
    ComponentsModule
  ]
})
export class PagesModule { }
