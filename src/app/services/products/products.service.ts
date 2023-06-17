import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

import { Product } from 'src/app/models';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  private path_products = `${environment.apiUrl}/test/productos.json`;

  getLastProducts(limit: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.path_products).pipe(
      map((res) => {
        if (res.length > 0) {
          return res.slice(limit * -1)
        }
        return [];
      }),
    );
  };

  getAllProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.path_products).pipe(
      map((res) => {
        if (res) {
          return res;
        }
        return [];
      }),
    );
  };

  getProductByCategory(id_subcategoria: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.path_products).pipe(
      map((res) => {
        if (res) {
          return res.filter((prd) => prd.id_subcategoria === id_subcategoria);
        }
        return [];
      }),
    );
  };


}
