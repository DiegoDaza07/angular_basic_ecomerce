import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Product, ProductImg } from 'src/app/models';
import { ImagesService, SubCategoriesService } from 'src/app/services';

@Component({
  standalone: true,
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  imports: [MatCardModule, MatButtonModule, MatIconModule],
})
export class ProductCardComponent implements OnChanges {

  constructor(
    private imageService: ImagesService,
    private subcategoryService: SubCategoriesService,
  ) { }

  formatNumberToMoney(number: number ): string {
    return number.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
  }

  @Input() product?: Product;
  nameCategory: string = '';


  ngOnChanges(changes: SimpleChanges): void {

    if (changes['product'] && this.product?.imagenes) {

      const images: ProductImg[] = []
      for (let img of this.product.imagenes) {
        this.imageService.productImgUrl(img.nombre).subscribe((url) => {
          images.push({ ...img, url: url });
        });
      };
      this.product.imagenes = images;

      this.subcategoryService.getSubCategoryById(this.product.id_subcategoria).subscribe((res) => {
        if (res) {
          this.nameCategory = res.nombre;
        }
      });

    };

  };

}
