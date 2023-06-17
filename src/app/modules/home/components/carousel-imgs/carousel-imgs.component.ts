import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { Image } from 'src/app/models';

@Component({
  standalone: true,
  selector: 'app-carousel-imgs',
  templateUrl: './carousel-imgs.component.html',
  styleUrls: ['./carousel-imgs.component.css'],
  imports: [MatIconModule, NgFor]
})
export class CarouselImgsComponent implements OnInit{
  
  constructor(private router: Router) { };
  
  @Input() inputImages?: Image[];
  finishScroll = true;

  goToRouteCategory(categoryName: string) {
    this.router.navigate([`products/${categoryName}`]);
  };

  async changeImage(state: 'previus' | 'next') {
    const carousel = document.getElementById('carousel-container-id');
    if (carousel && carousel.lastElementChild && carousel.firstElementChild && this.finishScroll) {
      this.finishScroll = false;

      if (carousel.scrollLeft == 0) {
        carousel.style.scrollBehavior = 'inherit';
        carousel.insertBefore(carousel.lastElementChild, carousel.firstElementChild)
        carousel.scrollLeft += carousel.clientWidth;
      }

      if(carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth){
        carousel.style.scrollBehavior = 'inherit';
        carousel.appendChild(carousel.firstElementChild);
        carousel.scrollLeft -= carousel.clientWidth;
      }

      carousel.style.scrollBehavior = 'smooth';
      state === 'previus' ?
        carousel.scrollLeft -= carousel.clientWidth
        :
        carousel.scrollLeft += carousel.clientWidth;
        await new Promise((r) => setTimeout(r, 800));
        this.finishScroll = true;
    }
  };


  ngOnInit() {
    interval(5000).subscribe(() => {
      this.changeImage('next');
    });
  }

};

