import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Product, User } from 'src/app/models';
import { ShoppingCart } from 'src/app/models/shopping-cart.model';
import { ImagesService, ShoppingCartService, UsersService } from 'src/app/services';


@Component({
  standalone: true,
  selector: 'app-toolbar',
  imports: [MatToolbarModule, MatIconModule, MatBadgeModule, NgIf, NgFor],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
})
export class ToolbarComponent implements OnInit {

  constructor(
    private router: Router,
    private userService: UsersService,
    private shoppingCartService: ShoppingCartService,
  ) { };
  goToRoute(route: string) {
    this.router.navigate([`${route}`]);
  };


  /**
   * shopping Cart 
   */
  productsCart = [] as ShoppingCart[];
  total_products = 0;
  total_amount = '0';

  emptyCart() {
    this.shoppingCartService.emptyCard();
  }


  /**
   *  user
   */
  userLogin: User | undefined;
  hidePasswordView = true;

  logOut() {
    this.userService.logOut().subscribe(
      (e) => e ? this.userLogin = undefined : null
    );
  };

  addProduct(product: Product) {
    this.shoppingCartService.addProduct(product);
  }

  removeProduct(product: Product) {
    this.shoppingCartService.removeProduct(product);
  }


  /**
   * @ngOnInit
   */
  ngOnInit(): void {

    this.userService.userLogin ?
      this.userLogin = this.userService.userLogin
      :
      this.userLogin = undefined
    ;

    this.shoppingCartService.getShoppingCart().subscribe((res) => {
      this.productsCart = res;
    });

    this.shoppingCartService.getTotalProducts().subscribe((res) => {
      this.total_products = res;
    });

    this.shoppingCartService.getTotalAmount().subscribe((res) =>{
      this.total_amount = res;
    })


  };
}
