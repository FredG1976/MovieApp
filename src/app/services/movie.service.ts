import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  API_KEY = 'd171f16c8618d398839e2c911526d23f';
  API_TMDB = 'https://api.themoviedb.org/3';
  
  constructor(private http:HttpClient) {}

  // discover:https://api.themoviedb.org/3/discover/movie?api_key=efdeb661aaa006b1e4f36f990a5fd8fd&language=fr
  getMoviesFromApi():Observable<any>{
    let req_url = this.API_TMDB + '/discover/movie?api_key='+this.API_KEY;
    return this.http.get(req_url);
  }

  // videos:https://api.themoviedb.org/3/movie/550/videos?api_key=efdeb661aaa006b1e4f36f990a5fd8fd&language=fr
  getVideosOfMovie(movieid:number):Observable<any>{
    let req_url = this.API_TMDB + '/movie/'+movieid+'/videos?api_key='+this.API_KEY;
    return this.http.get(req_url);
  }
}
