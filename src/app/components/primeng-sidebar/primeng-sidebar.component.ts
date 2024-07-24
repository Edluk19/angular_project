import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-primeng-sidebar',
  templateUrl: './primeng-sidebar.component.html',
  standalone: true,
  imports: [SidebarModule, ButtonModule, RouterLink],
  styleUrl: './primeng-sidebar.component.scss'

})
export class PrimengSidebarComponent {

  visibleSidebar: boolean = false;

  constructor(private router: Router) { }

  navigate(path: string) {
    this.router.navigate([path]);
  }
}

