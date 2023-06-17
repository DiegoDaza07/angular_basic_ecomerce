import { Component, OnInit } from '@angular/core';
import { Image, Product, SubCategory } from 'src/app/models';
import { ImagesService, ProductsService, SubCategoriesService } from 'src/app/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(
    private subCategoriesService: SubCategoriesService,
    private productService: ProductsService,
    private imageService: ImagesService,
  ) { }

  products: Product[] = [];
  imagesSubCategories: Image[] = [];
  subcategories: SubCategory[] = [];

  configImageSubCategory(subCategories: SubCategory[]) {
    subCategories.map((subC)=>{
      this.imageService.subCategoryImgUrl(subC.imagen).subscribe((res)=>{
        this.imagesSubCategories.push(
          {
            id: subC.id,
            name: subC.nombre,
            url: res,
          }
        )
      })
    });

    document.documentElement.style.setProperty('--total-repeat', `${this.imagesSubCategories.length}`);
    
  };

  ngOnInit(): void {
    
    this.subCategoriesService.getAllSubCategories().subscribe((subC) =>{
      this.configImageSubCategory(subC);
      this.subcategories = subC.slice(0, 4);
    });

    this.productService.getLastProducts(6).subscribe((pr)=> this.products = pr);
  };
}
