import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubCategory } from 'src/app/models';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SubCategoriesService {

  constructor(private httpClient: HttpClient) { }

  private path_subCategories = '/subcategorias.json';

  getAllSubCategories(): Observable<SubCategory[]> {
    return this.httpClient.get<SubCategory[]>(`${environment.apiUrl}${this.path_subCategories}`);
  };
};
