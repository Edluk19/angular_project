import { Injectable } from '@angular/core';
import { nowPlayingmovies, popularMovies, topRatedMovies, upcomingMovies } from '../../mock-data';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

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


}
