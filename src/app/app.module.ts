import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { ImagesService, ProductsService, SubCategoriesService } from 'src/app/services';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    HttpClientModule,
  ],
  providers: [
    SubCategoriesService,
    ImagesService,
    ProductsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
