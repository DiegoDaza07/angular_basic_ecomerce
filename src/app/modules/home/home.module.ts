import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FooterComponent, ToolbarComponent } from 'src/app/components';
import { CardSubCategoryComponent } from './components';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ToolbarComponent,
    FooterComponent,
    CardSubCategoryComponent,
    NgFor,
  ]
})
export class HomeModule { }
