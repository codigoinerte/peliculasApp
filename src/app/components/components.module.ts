import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CastSlideshowComponent } from './cast-slideshow/cast-slideshow.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { PipesModule } from '../pipes/pipes.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CastSlideshowComponent,
    NavbarComponent,
    PeliculasPosterGridComponent,
    SlideshowComponent
  ],
  exports:[
    CastSlideshowComponent,
    NavbarComponent,
    PeliculasPosterGridComponent,
    SlideshowComponent,
    PipesModule
  ],
  imports: [
    CommonModule,
    PipesModule,
    RouterModule
  ]
})
export class ComponentsModule { }
