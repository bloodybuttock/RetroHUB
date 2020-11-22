import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart';
import { AuthService } from '../shared/auth.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  api: 'http://localhost:3000/carts/';
  model: Cart;

  constructor(private http: HttpClient, private authService: AuthService) {}

  addCart(cart: Cart) {
    let userId = localStorage.getItem('_userId');
    return this.http.post<any>(this.api + `${userId}`, cart);
  }
}
