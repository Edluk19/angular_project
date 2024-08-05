import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { RouterLink, RouterModule } from '@angular/router';
import { MovieService } from '../../servises/movie/movie.service';
import { Movie, MovieApiModel } from '../../models/movie.model';

@Component({
  selector: 'app-popular-page',
  standalone: true,
  imports: [MovieListComponent, RouterLink, RouterModule],
  templateUrl: './popular-page.component.html',
  styleUrl: './popular-page.component.scss'
})
export class PopularPageComponent implements OnInit {
  popularMovies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getNowPlayingmovies().subscribe({
      next: (response: MovieApiModel) => {
        this.popularMovies = response.results;
      }
    });
  }

}