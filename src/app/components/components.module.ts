import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CastSlideshowComponent } from './cast-slideshow/cast-slideshow.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { SlideshowComponent } from './slideshow/slideshow.component';



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
    SlideshowComponent
  ],
  imports: [
    CommonModule,
    
  ]
})
export class ComponentsModule { }
