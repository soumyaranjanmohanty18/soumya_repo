import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    { id: 101, name: 'Smart Inventory', price: 299.99 },
    { id: 102, name: 'POS System', price: 199.99 }
  ];

  getAll(): Observable<Product[]> {
    return of(this.products);
  }
}
