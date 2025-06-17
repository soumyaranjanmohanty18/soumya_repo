import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Transaction } from '../models/transaction.model';

@Injectable({ providedIn: 'root' })
export class TransactionService {
  private transactions: Transaction[] = [
    {
      id: 1,
      customerId: 1,
      productId: 101,
      date: new Date('2025-06-01'),
      amount: 299.99
    },
    {
      id: 2,
      customerId: 2,
      productId: 102,
      date: new Date('2025-06-05'),
      amount: 199.99
    }
  ];

  getAll(): Observable<Transaction[]> {
    return of(this.transactions);
  }
}
