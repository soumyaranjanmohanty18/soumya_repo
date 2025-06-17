import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from '../models/customer.model';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private customers: Customer[] = [
    { id: 1, name: 'Alice Johnson', email: 'alice@smartbiz.com' },
    { id: 2, name: 'Bob Smith', email: 'bob@smartbiz.com' }
  ];

  getAll(): Observable<Customer[]> {
    return of(this.customers);
  }
}
