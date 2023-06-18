import { NgFor } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { Subject, interval, takeUntil } from 'rxjs';
import { Image } from 'src/app/models';

@Component({
  standalone: true,
  selector: 'app-carousel-imgs',
  templateUrl: './carousel-imgs.component.html',
  styleUrls: ['./carousel-imgs.component.css'],
  imports: [MatIconModule, NgFor]
})
export class CarouselImgsComponent implements OnInit, OnDestroy {
  
  constructor(private router: Router) { };
  
  @Input() inputImages?: Image[];
  private destroy$ = new Subject<void>();
  private interval$ = interval(5000); 
  finishScroll = true;

  goToRouteCategory(id: number) {
    this.router.navigate([`products/${id}`]);
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

  ngOnInit(): void {
    this.interval$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.changeImage('next');
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(); 
    this.destroy$.complete(); 
  }
};

