import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private movieService:MovieService) { }

  movies:any; //variable d'affichage

  ngOnInit(): void {
    this.movieService.getMoviesFromApi().subscribe((response:any) => {
      console.log(response);
      this.movies = response.results;
    });      
  }

  getImageUrl(image:string){
    return 'https://image.tmdb.org/t/p/w500/' + image;
  }
}