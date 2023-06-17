import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  subCategoryImgUrl(name: string): Observable<string> {
    const url = `${environment.apiImgCategoryUrl}/${name}`;
    return of (url);
  };

  productImgUrl(name: string): Observable<string> {
    const url = `${environment.apiImgProductUrl}/compragamer_Imganen_general_${name}-med.jpg`;
    return of (url);
  };

};
