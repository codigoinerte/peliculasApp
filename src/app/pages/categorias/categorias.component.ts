import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../../interface/cartelera-response';
import { PeliculasService } from '../../services/peliculas.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit, OnDestroy {
  movies:Movie[] = [];
  categoryId = 0;
  constructor(private ar:ActivatedRoute, private ps:PeliculasService) {


      this.getMovies(); 

   }

  ngOnInit(): void {
    
  }

  getMovies()
  {
            this.ar.params
            .subscribe((params) => {
                this.categoryId = params.id;
                this.ps.getCartelera()
                .pipe(
                  map( (data:Movie[]) => {
                    return data.filter(data =>  {                      
                      return data.genre_ids.find(number => number == params.id);
                      
                    } );
                  })
                )
                .pipe(
                  map((data:Movie[]) => {
                    
                    return data.filter( item => {
                    
                      let identifier = 0;
                      this.movies.forEach(element => {
                        
                        if(element.id==item.id)
                        {
                          identifier++;
                        }

                      });
                      
                      if(identifier == 0)
                      {
                          return true;
                      }             
                      else
                      {
                        return false;
                      }         
                      

                    })

                  })
                )
                .subscribe(data => {
                  // this.movies = data;                                  
                  // return data;
                  this.movies.push(...data);
                  console.log(this.movies);

                  if(this.movies.length<=18)
                  {
                    this.getMovies();                    
                  }

                })

            });

  }
  ngOnDestroy()
  {
    this.movies = [];
  }

}
