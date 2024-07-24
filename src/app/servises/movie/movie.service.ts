import { Injectable } from '@angular/core';
import { nowPlayingmovies, popularMovies, topRatedMovies, upcomingMovies } from '../../mock-data';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private WatchMovieList: any[] = [];
  private FavMovieList: any[] = [];
  constructor() { }
  getNowPlayingmovies() {
    return nowPlayingmovies
  }
  getPopularMovies() {
    return popularMovies
  }
  getTopRatedMovies() {
    return topRatedMovies
  }
  getUpcomingMovies() {
    return upcomingMovies
  }

  addFavMovie(movie: any) {
    this.FavMovieList.push(movie);
  }

  getFavMovies() {
    return this.FavMovieList;
  }


  addWatchMovie(movie: any) {
    this.WatchMovieList.push(movie);
  }

  getWatchMovies() {
    return this.WatchMovieList;
  }
}
