import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Genero } from '../../interface/categoria-response';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  generos:Genero[] = [];
  
  constructor(private router:Router, private ps:PeliculasService) {
    this.ps.getCategories()
            .subscribe( data => {
              this.generos = data;
            });
   }

  ngOnInit(): void {
  }

  TextoBuscar(valor:string){
    this.router.navigateByUrl(`/buscar/${valor}`);
  }
  categorias(genero:Genero){
    this.router.navigateByUrl(`/categorias/${genero.id}`);
  }
  

}
