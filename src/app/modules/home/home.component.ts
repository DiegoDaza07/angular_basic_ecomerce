import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/models';
import { SubCategoriesImageFixService } from 'src/app/services';
import { SubCategoriesService } from 'src/app/services/sub-categories/sub-categories.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(private subCategoriesService: SubCategoriesService) { }

  subCategories: SubCategory[] = [];

  configImageSubCategory(subCategories: SubCategory[]) {
    this.subCategories.push(...SubCategoriesImageFixService.ImageFix(subCategories))
  };


  ngOnInit(): void {
    this.subCategoriesService.getAllSubCategories().subscribe((subc) => this.configImageSubCategory(subc));
  };

}
