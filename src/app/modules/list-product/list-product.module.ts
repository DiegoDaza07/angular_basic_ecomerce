import { NgModule } from '@angular/core';
import { ListProductComponent } from './list-product.component';
import { CommonModule, NgFor } from '@angular/common';
import { FooterComponent, ProductCardComponent, ToolbarComponent } from 'src/app/components';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ListProductRoutingModule } from './list-product-routing.module';
import { ListSubCategoriesComponent } from './components/list-sub-categories/list-sub-categories.component';



@NgModule({
  declarations: [
    ListProductComponent,
  ],
  imports: [
    ListSubCategoriesComponent,
    ListProductRoutingModule,
    CommonModule,
    ProductCardComponent,
    ToolbarComponent,
    FooterComponent,
    MatToolbarModule,
    NgFor,
  ]
})
export class ListProductModule { }
