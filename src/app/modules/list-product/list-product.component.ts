import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Product, SubCategory } from 'src/app/models';
import { ImagesService, ProductsService, SubCategoriesService } from 'src/app/services';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private subCategoriesService: SubCategoriesService,
    private productService: ProductsService,
    private ImagesService: ImagesService
  ) { }

  subCategory: SubCategory | undefined;
  subCategories: SubCategory[] = [];
  products: Product[] = [];


  ngOnInit(): void {

    this.subCategoriesService.getAllSubCategories().subscribe((cats) => {
      cats.map((cat) => {
        this.productService.getProductByCategory(cat.id).subscribe((prs) => {
          if (prs.length > 0) {
            this.subCategories.push(cat);
          }
        })
      })
    });


    this.route.paramMap.subscribe((param: ParamMap) => {

      const idString = param.get('id') || '-1';
      const idNumber = parseInt(idString, 10);

      if (idNumber > 0) {

        this.subCategoriesService.getSubCategoryById(idNumber).subscribe((cat) => {
          if (cat) {
            this.ImagesService.subCategoryImgUrl(cat.imagen).subscribe((url) => {
              this.subCategory = { ...cat, url_img: url };
            });
          };
        });

        this.productService.getProductByCategory(idNumber).subscribe((prds) => {
          prds.length > 0 ?
            this.products = prds
            :
            this.router.navigateByUrl('/home');

        });
      }

      const htmlElement = document.querySelector("html")!;
      htmlElement.scrollTo({top: 0, behavior:'smooth'});
    })

  };

};
