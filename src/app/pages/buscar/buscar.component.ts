import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  constructor(private ar:ActivatedRoute) {
    this.ar.params.subscribe( params => {
        console.log(params.buscar);
    } )
   }

  ngOnInit(): void {
  }


}
