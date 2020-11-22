import { AuthService } from './../shared/auth.service';
import { Cart } from './../models/Cart';
import { environment } from './../../environments/environment';
import { Products } from './../models/Products';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'jquery';

import { map } from 'rxjs/operators';
import { NgModel } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  api: 'http://localhost:3000/checkout/proceed';
  model: Cart;

  constructor(private http: HttpClient, private authService: AuthService) {}
  private getProduct(response) {
    return response.data;
  }

  getProductList(): Observable<Products[]> {
    return this.http
      .get<Products[]>(environment.backendURL + 'products')
      .pipe(map(this.getProduct));
  }

  getProd(url) {
    return this.http.get<any>(url);
  }

  addCart(_productId) {
    console.log('added to cart');

    return this.http.post(this.api + '/' + this.authService.get_userId(), {
      id: _productId,
    });
  }
}
