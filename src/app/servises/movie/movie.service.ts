import { Injectable } from '@angular/core';
import { nowPlayingmovies, popularMovies, topRatedMovies, upcomingMovies } from '../../mock-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MovieApiModel } from '../../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  apiKey = '?api_key=788fa8a963ce4d03ba3826cc7d658f32';
  apiToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODhmYThhOTYzY2U0ZDAzYmEzODI2Y2M3ZDY1OGYzMiIsIm5iZiI6MTcyMjM2MDkxMi4yODU5NjUsInN1YiI6IjY2YTkxZTIyNDI4YWIwYzAzY2EzNzIwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xhv0oa5Q25bHLQWMJe8RoWnF36DbgqyB_m52Q-RvFbE'
  baseApiUrl = 'https://api.themoviedb.org/3/movie';
  private watchMovieList: any[] = [];
  private favMovieList: any[] = [];
  constructor(private httpClient: HttpClient) { }
  getNowPlayingmovies(): Observable<MovieApiModel> {
    return this.httpClient.get<MovieApiModel>(`${this.baseApiUrl}/now_playing${this.apiKey}`);
  }
  getPopularMovies(): Observable<MovieApiModel> {
    return this.httpClient.get<MovieApiModel>(`${this.baseApiUrl}/popular${this.apiKey}`);
  }
  getTopRatedMovies(): Observable<MovieApiModel> {
    return this.httpClient.get<MovieApiModel>(`${this.baseApiUrl}/top_rated${this.apiKey}`);
  }
  getUpcomingMovies(): Observable<MovieApiModel> {
    return this.httpClient.get<MovieApiModel>(`${this.baseApiUrl}/upcoming${this.apiKey}`);
  }

  addFavMovie(movie: any) {
    this.favMovieList.push(movie);
  }

  getFavMovies() {
    return this.favMovieList;
  }


  addWatchMovie(movie: any) {
    this.watchMovieList.push(movie);
  }

  getWatchMovies() {
    return this.watchMovieList;
  }
}
