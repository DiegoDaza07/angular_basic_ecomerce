import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { SubCategory } from 'src/app/models';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SubCategoriesService {

  constructor(private httpClient: HttpClient) { }

  private path_subCategories = `${environment.apiUrl}/test/subcategorias.json`;

  getAllSubCategories(): Observable<SubCategory[]> {
    return this.httpClient.get<SubCategory[]>(this.path_subCategories).pipe(
      map((res) => {
        if (res) {
          return res;
        }
        return [];
      }),
    );
  };

  getSubCategoryById(id: number): Observable<SubCategory | undefined> {
    return this.httpClient.get<SubCategory[]>(this.path_subCategories).pipe(
      map((res) => {
        if (res) {
          return res.find((res) => res.id == id);
        }
        return undefined;
      })
    );
  };

};
