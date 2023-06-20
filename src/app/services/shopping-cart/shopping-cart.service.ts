import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, catchError, map, of } from 'rxjs';
import { Product } from 'src/app/models';
import { ShoppingCart } from 'src/app/models/shopping-cart.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor() { }

  public shoppingCart: BehaviorSubject<ShoppingCart[]> = new BehaviorSubject<ShoppingCart[]>([]);

  getShoppingCart(): Observable<ShoppingCart[]> {
    return this.shoppingCart.asObservable();
  };

  getTotalProducts(): Observable<number> {
    return this.shoppingCart.asObservable().pipe(
      map((shopp) => {
        const itemTotal = (accomulator: number, currentValue: ShoppingCart) => accomulator + (1 * currentValue.quantity);
        return shopp.reduce(itemTotal, 0);
      })
    );
  };


  getTotalAmount() {
    return this.shoppingCart.asObservable().pipe(
      map((shopp)=>{
        const productTotal = (accumulator:number, currentValue:ShoppingCart) => accumulator + (currentValue.product.precio * currentValue.quantity);
        return shopp.reduce(productTotal , 0).toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
      })
    )
  }

  addProduct(product: Product): Observable<void> {
    const shopp = this.shoppingCart.getValue();
    const product_exist = shopp.find((sh) => sh.product.id_producto == product.id_producto);
    return of(
      product_exist ?
        this.shoppingCart.next(
          shopp.map((sh) => sh.product.id_producto == product.id_producto ? { ...sh, quantity: sh.quantity + 1 } : sh)
        )
        :
        this.shoppingCart.next(
          [...shopp, { product: product, quantity: 1 }]
        )
    )
  };


  removeProduct(product: Product): Observable<void> {
    const shopp = this.shoppingCart.getValue();
    const shopping_product = shopp.find((sh) => sh.product.id_producto = product.id_producto);
    return of(
      shopping_product && shopping_product.quantity == 1 ?
        this.shoppingCart.next(
          shopp.filter((sh) => sh.product.id_producto != product.id_producto)
        )
        :
        this.shoppingCart.next(
          shopp.map((sh) => sh.product.id_producto == product.id_producto ? { ...sh, quantity: sh.quantity - 1 } : sh)
        )
    )
  };

  emptyCard(): Observable<void> {
    this.shoppingCart.next([]);
    return of()
  };

}


