import { Injectable } from '@angular/core';
import { Observable, Subject, of, throwError } from 'rxjs';
import { User, userLogin } from 'src/app/models';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  users: User[] = [];

  userLogin: User | undefined;

  singIn(_user: userLogin): Observable<User> {
    const userLogin = this.users.find((user) => user.email == _user.email && user.password == _user.password);
    if (!userLogin) {
      return throwError(() => new Error('Email o contraseña incorrecta o el usuario no esta registrado'));
    }
    this.userLogin = userLogin;
    return of(userLogin);
  };

  logOut(): Observable<boolean> {
    this.userLogin = undefined;
    return of(true);
  };

  createUser(_user: User): Observable<User> {

    const existEmail = this.users.find((user) => user.email === _user.email);
    if (existEmail) {
      return throwError(() => new Error('Este Email ya se encuentra registrado por favor inicie sesion'))
    }
    const newUser = { ..._user, id: uuidv4() }
    this.users.push(newUser);
    this.userLogin = newUser;
    return of(_user)
  };


  deleteUser(_id: string): Observable<boolean> {

    const user = this.users.find((user) => user.id == _id);
    if (!user) {
      return throwError(() => new Error(`El usuario con el id : ${_id} no se encuentra registrado`));
    }
    this.users = this.users.filter((user) => user.id != _id);
    this.userLogin = undefined;
    return of(true);
  };


  updateUser(userUpdate: User): Observable<User> {

    const user = this.users.find((user) => user.id == userUpdate.id);
    if (!user) {
      return throwError(() => new Error(`El usuario con el id : ${userUpdate.id} no se encuentra registrado`));
    };
    this.users.map((user) => user.id == userUpdate.id ? userUpdate : user);
    this.userLogin = user;

    return of(userUpdate);
  };
}


