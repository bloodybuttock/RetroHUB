import { AuthService } from './../shared/auth.service';

import { Pagination } from './../models/Pagination';
import { data } from 'jquery';
import { Products } from './../models/Products';
import { ApiService } from './../_service/api.service';
import { Observable } from 'rxjs';
// import { PaginationComponent } from './../pagination/pagination.component';
import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
// import { Todo } from '../models/Todo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Products[];
  pagination: Pagination;
  page: Array<number> = [];

  constructor(
    private homeService: HomeService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.paginationFunction();

    this.authService.getUserProfile(this.authService.get_userId()).subscribe(
      (success) => {
        console.log('success');
      },
      (error) => {
        console.log(error.error.message);
      }
    );
  }

  pageClick(page) {
    this.page = [];
    this.products = [];
    let url = 'http://localhost:3000/products?page=' + page;
    this.homeService.getProd(url).subscribe((result: any) => {
      this.products = result.product;
      this.pagination = result;

      let pg = result.page;
      let pages = this.page;

      if (pg === 1) {
        this.page.push(pg);
        this.page.push(pg + 1);
        this.page.push(pg + 2);
      } else if (pg === result.totalPage) {
        this.page.push(pg - 2);
        this.page.push(pg - 1);
        this.page.push(pg);
      } else {
        this.page.push(pg - 1);
        this.page.push(pg);
        this.page.push(pg + 1);
      }
    });
  }

  paginationFunction() {
    this.homeService
      .getProd('http://localhost:3000/products')
      .subscribe((result: any) => {
        this.products = result.product;
        this.pagination = result;

        let pg = parseInt(result.page);

        if (pg === 1) {
          this.page.push(pg);
          this.page.push(pg + 1);
          this.page.push(pg + 2);
        } else if (pg === result.totalPage) {
          this.page.push(pg - 2);
          this.page.push(pg - 1);
          this.page.push(pg);
        } else {
          this.page.push(pg - 1);
          this.page.push(pg);
          this.page.push(pg + 1);
        }
      });
  }

  addCartbutton() {
    console.log('added to cart');
  }
}
