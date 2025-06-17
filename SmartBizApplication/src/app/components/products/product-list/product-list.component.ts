import { Component, OnInit } from '@angular/core';
import { ProductService }     from '../../../services/product.service';
import { Product }            from '../../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private svc: ProductService) {}
  ngOnInit() {
    this.svc.getAll().subscribe((data: Product[]) => this.products = data);
  }
}
