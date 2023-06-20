import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { User } from 'src/app/models';
import { UsersService } from 'src/app/services';

@Component({
  standalone: true,
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css'],
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf, MatButtonModule, MatIconModule],
})
export class FormRegisterComponent implements OnInit {

  constructor(
    private userService: UsersService,
    private router: Router
  ) { }

  errorCreate = { text: '', state: false };
  hidePasswordView = true;

  userForm = new FormGroup({
    name: new FormControl('', [Validators.required,]),
    surnames: new FormControl('', [Validators.required,]),
    document: new FormControl('', [Validators.required, Validators.min(1000000)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required,]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  goToLogin() {
    this.router.navigate(['login']);
  }

  createUser() {

    if (this.userForm.valid) {

      const user: User = this.userForm.value as unknown as User;
      this.userService.createUser(user)
        .pipe(
          catchError(async (er) => {this.errorCreate = { text: er, state: true }})
        ).subscribe(
           () => this.errorCreate.state ? null : this.router.navigate(['home']),
        )
    };

  }



  ngOnInit() {
  }
}
