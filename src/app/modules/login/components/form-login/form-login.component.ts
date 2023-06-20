import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { userLogin } from 'src/app/models';
import { UsersService } from 'src/app/services';

@Component({
  standalone: true,
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css'],
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf, MatButtonModule, MatIconModule],
})
export class FormLoginComponent {

  constructor(
    private userService: UsersService,
    private router: Router,
  ){}

  errorLogin = { text: '', state: false };
  hidePasswordView = true;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  goToRegister() {
    this.router.navigate(['register']);
  }

  login() {

    if(this.loginForm.valid){

      const userLogin: userLogin = this.loginForm.value as userLogin;

      this.userService.singIn(userLogin).pipe(
        catchError(async (er)=> this.errorLogin = {text: er, state: true})
      ).subscribe(
       ()=> this.errorLogin.state ? null : this.router.navigate(['home']),
      )
    };
  };
  
}
