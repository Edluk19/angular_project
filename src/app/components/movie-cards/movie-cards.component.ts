import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DurationPipe } from '../../pipes/duration/duration.pipe';
import { ReleaseDatePipe } from '../../pipes/date/release-date.pipe';
import { Router } from '@angular/router';
import { MovieService } from '../../servises/movie/movie.service';


@Component({
  selector: 'app-movie-cards',
  standalone: true,
  imports: [DurationPipe, ReleaseDatePipe],
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.scss'],
})
export class MovieCardsComponent {
  @Input() movie: any;

  constructor(private router: Router, private movieDataService: MovieService) { }

  onSelectFavMovie(movie: any) {
    this.movieDataService.addFavMovie(movie);
  }
  onSelectWatchMovie(movie: any) {
    this.movieDataService.addWatchMovie(movie);
  }
}
