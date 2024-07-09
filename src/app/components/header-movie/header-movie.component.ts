import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-movie',
  standalone: true,
  imports: [RouterModule, RouterLink,],
  templateUrl: './header-movie.component.html',
  styleUrl: './header-movie.component.scss'
})
export class HeaderMovieComponent {
  @Input() favoriteMovieIds: string[] = [];
  @Input() watchLaterMovieIds: string[] = [];

  constructor(private router: Router) { }

  navigateWithData(data: string[], favorite?: string) {

    const dataString = JSON.stringify(data);
    const path = favorite ? 'favorite' : 'watch-list';

    // навігація для первинного outlet
    // this.router.navigate(['favorite'], { queryParams: { data: dataString } });

    // навігація для додаткового outlet з назвою header
    this.router.navigate([{ outlets: { header: [path] } }], { queryParams: { data: dataString } });
  }
}
