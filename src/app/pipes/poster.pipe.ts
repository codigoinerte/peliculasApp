import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'poster'
})
export class PosterPipe implements PipeTransform {

  transform(poster:string, type:number = 0): string {
    
    if(poster)
    {
      if(type==1)
      {
        return `https://image.tmdb.org/t/p/w342${poster}`;
      }
      else
      {
        return `https://image.tmdb.org/t/p/original${poster}`;
      }      
    }
    else
    {
      return '';
    }
    
  }

}
