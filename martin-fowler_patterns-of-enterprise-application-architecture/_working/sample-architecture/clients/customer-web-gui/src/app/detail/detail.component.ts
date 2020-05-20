import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: [ './detail.component.css' ]
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const sku = this.route.snapshot.paramMap.get('sku');
    this.productService.getProductBySKU(sku)
      .subscribe((product) => this.product = product);
  }

  goBack(): void {
    this.location.back();
  }
}
