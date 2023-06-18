import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { SubCategory } from 'src/app/models';

@Component({
  standalone: true,
  selector: 'app-list-sub-categories',
  templateUrl: './list-sub-categories.component.html',
  styleUrls: ['./list-sub-categories.component.css'],
  imports: [MatListModule, MatDividerModule, NgFor, MatIconModule],
})
export class ListSubCategoriesComponent {

  constructor(private router: Router) { };

  @Input() subCategories: SubCategory[] = [];

  statusMenu = false;

  activeMenu(){
    const menu = document.getElementById('list-sub-category-container-id');
    if(menu && !this.statusMenu){
      menu.style.left =  '0px';
      this.statusMenu = true;
    } else if (menu && this.statusMenu){
      menu.style.left =  '-100vh';
      this.statusMenu = false;
    }
  }

  goToRouteCategory(id: number) {
    this.router.navigate([`products/${id}`]);
    this.activeMenu()
  };

}
