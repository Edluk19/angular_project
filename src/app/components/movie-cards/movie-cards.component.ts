import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DurationPipe } from '../../pipes/duration/duration.pipe';
import { ReleaseDatePipe } from '../../pipes/date/release-date.pipe';


@Component({
  selector: 'app-movie-cards',
  standalone: true,
  imports: [DurationPipe, ReleaseDatePipe],
  templateUrl: './movie-cards.component.html',
  styleUrls: ['./movie-cards.component.scss'],
})
export class MovieCardsComponent {
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