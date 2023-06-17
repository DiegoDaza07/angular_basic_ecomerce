import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FooterComponent, ProductCardComponent, ToolbarComponent } from 'src/app/components';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CarouselImgsComponent } from './components/carousel-imgs';


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
