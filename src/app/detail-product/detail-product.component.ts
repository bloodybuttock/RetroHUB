import { Component, OnInit } from '@angular/core';
// import {DetailProduct} from './detail-product.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css'],
})
export class DetailProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // this.detailProduct.getProductDetail().subscribe((res: any) => {
    //   console.log(res);
    // });
  }
}
