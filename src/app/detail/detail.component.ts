import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(
    private movieService: MovieService, 
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    let movieid = parseInt(this.route.snapshot.params.movieid);
    this.movieService.getVideosOfMovie(movieid).subscribe((response)=> console.log(response));
    this.movieService.movie$.subscribe((movie)=> console.log(movie));
  }

}
