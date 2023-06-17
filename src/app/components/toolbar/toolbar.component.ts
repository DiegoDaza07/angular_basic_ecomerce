import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';


@Component({
  standalone: true,
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatIconModule, MatBadgeModule,],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent {

  constructor(private router: Router) { };

  goToRoute(route: string) {
    this.router.navigate([`/${route}`]);
  };
}
