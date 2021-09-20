import { Component, OnInit } from '@angular/core';
import Customer from 'src/app/models/customer.model';
import Order from 'src/app/models/order.model';
import { CustomerService } from 'src/app/services/customer.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-find-order',
  templateUrl: './find-order.component.html',
  styleUrls: ['./find-order.component.css']
})
export class FindOrderComponent implements OnInit {
  customers: Customer[] = [];
  selectedCustomerId: Number | undefined;
  selectedOrderId: Number | undefined;
  ordersForCustomer: Order[] = []

  constructor(
    private customerService: CustomerService,
    private orderService: OrderService
  ) { }

  async ngOnInit(): Promise<void> {
    try {
      this.customers = await this.customerService.getCustomers();
      this.selectedCustomerId = this.customers[0].id;
      this.ordersForCustomer = await this.orderService.getOrderByCustomerId(this.selectedCustomerId);
    } catch (error) { console.log(error); }
  }

  async changeOrdersDisplayed() {
    if (this.selectedCustomerId === undefined) { return }
    try {
      this.ordersForCustomer = await this.orderService.getOrderByCustomerId(this.selectedCustomerId);
      console.log(this.ordersForCustomer);

    } catch (error) { console.log(error); }
  }

  async updateOrders() {
    if(this.selectedCustomerId===undefined){return}
    this.ordersForCustomer = await this.orderService.getOrderByCustomerId(this.selectedCustomerId);
    this.selectOrder(0)
  }
  selectOrder(id: Number) {
    this.selectedOrderId = id
  }

}
