import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FooterComponent, ProductCardComponent, ToolbarComponent } from 'src/app/components';
import { CarouselImgsComponent } from './components';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CarouselImgsComponent,
    CommonModule,
    ProductCardComponent,
    HomeRoutingModule,
    ToolbarComponent,
    FooterComponent,
    MatToolbarModule,
    NgFor,
  ]
})
export class HomeModule { }
