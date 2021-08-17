import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interface/cartelera-response';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  @Input() slider:Movie[] = [] ;
  constructor() { }

  ngOnInit(): void {
  }

}
