import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ReleaseDatePipe } from '../../pipes/date/release-date.pipe';
import { DurationPipe } from '../../pipes/duration/duration.pipe';

@Component({
  selector: 'app-primeng-movie-card',
  standalone: true,
  imports: [CardModule, ButtonModule, DurationPipe, ReleaseDatePipe],
  templateUrl: './primeng-movie-card.component.html',
  styleUrl: './primeng-movie-card.component.scss'
})
export class PrimengMovieCardComponent {
  @Input() movie: any;
  @Output() addFavorite = new EventEmitter<any>();
  @Output() addWatch = new EventEmitter<any>();

  onAddFavorite() {
    this.addFavorite.emit(this.movie);
  }

  onAddWatch() {
    this.addWatch.emit(this.movie);
  }
}
