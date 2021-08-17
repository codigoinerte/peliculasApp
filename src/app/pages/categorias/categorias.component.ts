import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../interface/cartelera-response';
import { PeliculasService } from '../../services/peliculas.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  movies:Movie[] = [];

  constructor(private ar:ActivatedRoute, private ps:PeliculasService) {

    this.ar.params
            .subscribe((params) => {
              
                this.ps.getCartelera(100)
                .pipe(
                  map( (data:Movie[]) => {
                    return data.filter(data =>  {                      
                      return data.genre_ids.find(number => number == params.id);
                    } );
                  })
                )
                .subscribe(data => {
                  this.movies = data;
                })

            });

   }

  ngOnInit(): void {
  }

}
