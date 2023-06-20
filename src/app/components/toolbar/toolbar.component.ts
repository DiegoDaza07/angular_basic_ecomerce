import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { User } from 'src/app/models';
import { UsersService } from 'src/app/services';


@Component({
  standalone: true,
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatIconModule, MatBadgeModule, NgIf],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UsersService,
  ) { };

  userLogin: User | undefined;
  hidePasswordView = true;

  goToRoute(route: string) {
    this.router.navigate([`${route}`]);
  };

  logOut() {
    this.userService.logOut().subscribe(
      (e) => e ? this.userLogin = undefined : null
    );
  };

  ngOnInit(): void {

    this.userService.userLogin ?
      this.userLogin = this.userService.userLogin
      :
      this.userLogin = undefined;

  };
}
