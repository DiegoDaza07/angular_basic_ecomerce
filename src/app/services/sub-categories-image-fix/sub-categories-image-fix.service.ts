import { Injectable } from '@angular/core';
import { SubCategory } from 'src/app/models';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SubCategoriesImageFixService {

  constructor() { }

  static ImageFix(subCategories: SubCategory[]): SubCategory[] {
    return subCategories.map((subCategory)=>({...subCategory, imagen: `${environment.apiImgCategoryUrl}/${subCategory.imagen}`}))
  }
}
