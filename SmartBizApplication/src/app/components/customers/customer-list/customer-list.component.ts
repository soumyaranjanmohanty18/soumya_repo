// import { Component, OnInit } from '@angular/core';
// import { CustomerService }   from '../../services/customer.service';
// import { Customer }          from '../../models/customer.model';

// @Component({
//   selector: 'app-customer-list',
//   templateUrl: './customer-list.component.html'
// })
// export class CustomerListComponent implements OnInit {
//   customers: Customer[] = [];
//   constructor(private svc: CustomerService) {}
//   ngOnInit() {
//     this.svc.getAll().subscribe(data => this.customers = data);
//   }
// }


import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../models/customer.model';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html'
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];

  constructor(private svc: CustomerService) {}

  ngOnInit(): void {
    this.svc.getAll().subscribe((data: Customer[]) => this.customers = data);
  }
}
