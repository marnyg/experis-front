import { Component, OnInit } from '@angular/core';
import Order from 'src/app/models/order.model';
import { AddressService } from 'src/app/services/address.service';
import { CustomerService } from 'src/app/services/customer.service';
import { OrderService } from 'src/app/services/order.service';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-test-comp',
  templateUrl: './test-comp.component.html',
  styleUrls: ['./test-comp.component.css']
})
export class TestCOmpComponent implements OnInit {
  orders: Order[] = [];
  order: Order | undefined;

  constructor(
    private orderService: OrderService,
    private aService: AddressService,
    private cService: CustomerService,
    private sService: ServiceService,
    ) { }

  async ngOnInit(): Promise<void> {
    try {
      this.orders = await this.orderService.getOrders();
      this.order = await this.orderService.getOrderById(2);
      console.log(this.orders);
      console.log(this.order);

      console.log( await this.aService.getAddresses());
      console.log( await this.aService.getAddressById(3));

      console.log( await this.cService.getCustomers());
      console.log( await this.cService.getCustomerById(3));

      console.log( await this.sService.getServiceById(2));
      console.log( await this.sService.getServices());
    // let postorder = await this.orderService.postOrder(
    //   {
    //     customerId: 2,
    //     fromAddressId: 2,
    //     toAddressId: 2,
    //     serviceIds: [ 0 ],
    //     orderComment: "string"
    //   });
      // console.log(postorder);
    } catch (error) {
      console.log(error);
    }

  }
}
