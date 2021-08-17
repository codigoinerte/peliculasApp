import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interface/cartelera-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['.item-image{min-height:500px;width:100%;background-repeat:none !important;background-size:cover !important;background-position:center center !important}'
  ]
})
export class HomeComponent implements OnInit {


  public movies:Movie[] = [];
  public slider:Movie[] = [];

  constructor(public PeliculasService:PeliculasService) { }

  ngOnInit(): void {
    this.PeliculasService.getCartelera()
        .subscribe(movie =>{     
          console.log(movie);     
          this.movies = movie;
          this.slider = movie;
        })
  }

}
