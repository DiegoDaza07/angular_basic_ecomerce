import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

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
