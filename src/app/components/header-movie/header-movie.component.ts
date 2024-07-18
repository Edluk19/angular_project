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

  constructor(private router: Router) { }

  navigate(path: string) {
    this.router.navigate([path]);
  }

}
