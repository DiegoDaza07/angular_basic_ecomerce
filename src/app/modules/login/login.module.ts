import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FooterComponent, ToolbarComponent } from 'src/app/components';



@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    FormLoginComponent,
    CommonModule,
    LoginRoutingModule,
    ToolbarComponent,
    FooterComponent,
  ]
})
export class LoginModule { }
