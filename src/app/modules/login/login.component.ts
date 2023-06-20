import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

    constructor(
        private userService: UsersService,
        private router: Router
      ) { }
    
      ngOnInit(): void {
    
        this.userService.userLogin ?
        this.router.navigate(['home']) 
        :
        null;
    
      }
}
