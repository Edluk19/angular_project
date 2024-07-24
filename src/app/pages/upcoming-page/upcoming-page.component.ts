import { Component } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { RouterLink, RouterModule } from '@angular/router';
import { MovieService } from '../../servises/movie/movie.service';

@Component({
  selector: 'app-upcoming-page',
  standalone: true,
  imports: [MovieListComponent, RouterLink, RouterModule],
  templateUrl: './upcoming-page.component.html',
  styleUrl: './upcoming-page.component.scss'
})
export class UpcomingPageComponent {
  upcomingMovies: any[] = [];
  constructor(private movieService: MovieService) { }
  ngOnInit() {
    this.upcomingMovies = this.movieService.getUpcomingMovies();
  }

}
