import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { FooterComponent, ToolbarComponent } from 'src/app/components';
import { FormRegisterComponent } from './components/form-register/form-register.component';



@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    FormRegisterComponent,
    CommonModule,
    RegisterRoutingModule,
    ToolbarComponent,
    FooterComponent,
  ]
})
export class RegisterModule { }
