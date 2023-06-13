import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SubCategoriesService } from './services/sub-categories/sub-categories.service';
import { SubCategoriesImageFixService } from './services';


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
    SubCategoriesImageFixService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
