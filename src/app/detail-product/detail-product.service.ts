import { Observable } from 'rxjs';
import { AuthService } from './../shared/auth.service';
import { Products } from './../models/Products';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DetailProductService {
  endpoint: 'http://localhost:3000/products/';
  model: Products;
  // id$: Observable<string>;
  id: string;

  constructor(private http: HttpClient, private authService: AuthService) {}

  // getProductDetail(product: Products) {
  //   // this.id$ = this.route.paramMap.pipe(map(ParamMap.get=>('id')))
  //   this.id = this.route.snapshot.paramMap.get('id');
  //   return this.http.get<any>(this.endpoint + `${userId}`, product);
  // }
}
