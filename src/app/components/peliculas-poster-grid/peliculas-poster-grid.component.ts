import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interface/cartelera-response';
import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input() movies:Movie[] = [];
  @Input() TypeList:number = 0;
  
  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  movieClick(movie:Movie){
    if(movie.id){
      this.route.navigateByUrl('pelicula/'+movie.id);
    }
  }
}
