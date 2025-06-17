import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../../services/transaction.service';
import { CustomerService } from '../../../services/customer.service';
import { ProductService } from '../../../services/product.service';

import { Transaction } from '../../../models/transaction.model';
import { Customer } from '../../../models/customer.model';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html'
})
export class TransactionListComponent implements OnInit {
  transactions: (Transaction & { customerName: string; productName: string })[] = [];

  constructor(
    private txSvc: TransactionService,
    private cuSvc: CustomerService,
    private prSvc: ProductService
  ) {}

  ngOnInit() {
    this.txSvc.getAll().subscribe((txs: Transaction[]) => {
      this.cuSvc.getAll().subscribe((cus: Customer[]) => {
        this.prSvc.getAll().subscribe((prs: Product[]) => {
          this.transactions = txs.map(t => ({
            ...t,
            customerName: cus.find(c => c.id === t.customerId)?.name || '',
            productName: prs.find(p => p.id === t.productId)?.name || ''
          }));
        });
      });
    });
  }
}
