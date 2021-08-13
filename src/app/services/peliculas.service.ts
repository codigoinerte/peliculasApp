import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarteleraResponse } from '../interface/cartelera-response';

import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private api:string = 'https://api.themoviedb.org/3/';

  get params () {
    return {
      api_key : environment.apikey,
      language: 'es-ES',
      page: 1
    }
  }

  constructor(private http:HttpClient) {

    this.getCartelera();

   }

  public getCartelera(){
    return this.http.get<CarteleraResponse>(`${this.api}movie/now_playing`, { params: this.params })
              .pipe(                 
                map( (data:CarteleraResponse) => {
                  return data.results;
                }),

              );
  }
}
