import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
    private movieService:MovieService,
    private router: Router
    ) { }

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

  goToDetailPage(movie:any){
    // 1 Pousser l'objet movie que l'utilisateur vient de cliquer
    this.movieService.movie$.next(movie);
    console.log(this.movieService.movie$);
    // 2 Naviguer vers la page details
    this.router.navigate(['detail',movie.id]);
  }
}