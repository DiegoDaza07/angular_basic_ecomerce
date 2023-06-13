import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SubCategory } from 'src/app/models';

@Component({
  standalone: true,
  selector: 'app-card-sub-category',
  templateUrl: './card-sub-category.component.html',
  styleUrls: ['./card-sub-category.component.css'],
})
export class CardSubCategoryComponent {

  constructor(private router: Router) { };
  @Input() subCategory: SubCategory | undefined;

  goToCategory() {
    if (this.subCategory?.nombre) {
      this.router.navigate([`product_list/${this.subCategory.nombre}`]);
    };
  };
}
