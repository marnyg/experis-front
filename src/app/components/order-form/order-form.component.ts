import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Customer from 'src/app/models/customer.model';
import Order, { OrderForPost } from 'src/app/models/order.model';
import Address from 'src/app/models/address.model';
import { CustomerService } from 'src/app/services/customer.service';
import { OrderService } from 'src/app/services/order.service';

import { AddressService } from 'src/app/services/address.service';
import { ServiceTypeService } from 'src/app/services/serviceType.service';
import ServiceType from 'src/app/models/serviceType.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  customers: Customer[] = [];
  addresses: Address[] = [];
  serviceTypes: ServiceType[] = [];


  @Input() order: Order | undefined;
  @Input() isEditable: boolean = false;
  @Output() orderUpdated = new EventEmitter()

  isInEditMode: boolean = true;
  newOrder!: OrderForPost;
  selectedCustomer: Customer | undefined;
  fromAddress: Address | undefined;
  toAddress: Address | undefined;
  comment: string = '';


  debug: boolean = false
  createNewCustomer: boolean = false;
  createFromAddress: boolean = false;
  createToAddress: boolean = false;

  constructor(
    private customerService: CustomerService,
    private addressService: AddressService,
    private serviceTypeService: ServiceTypeService,
    private orderService: OrderService,
    private router: Router
  ) { }
  async ngOnInit(): Promise<void> {
    this.isInEditMode = !Boolean(this.order)
    this.newOrder = {
      customerId: this.order?.customer.id,
      fromAddressId: this.order?.fromAddress.id,
      toAddressId: this.order?.toAddress.id,
      orderComment: this.order?.orderComment,
      serviceIds: this.order?.services ? this.order.services.map(s => s.serviceType.id) : [],
      date: this.order?.services[0]?.date,
    }

    try {
      this.customers = await this.customerService.getCustomers();
      this.addresses = await this.addressService.getAddresses();
      this.serviceTypes = await this.serviceTypeService.getServices();
    } catch (error) {
      console.log(error);
    }
  }

  changeCustomer() {
    this.newOrder.fromAddressId = this.addresses.find(a => a.id === this.newOrder.customerId)?.id
  }

  setDate(event: any) {
    if ((event.target as HTMLInputElement).value) {
      this.newOrder.date = new Date((event.target as HTMLInputElement).value)
    }
  }

  onServiceChange(e: Event, id: number) {
    if ((e.target as HTMLInputElement).checked) {
      this.newOrder.serviceIds.push(id)
    } else {
      this.newOrder.serviceIds = this.newOrder.serviceIds.filter(i => i !== id)
    }
    //keep only uniq values
    this.newOrder.serviceIds = this.newOrder.serviceIds
      .filter((value, index, self) => self.indexOf(value) === index)
  }

  orderIsInvalid(order: OrderForPost): boolean {
    console.log(
      this.newOrder.serviceIds === []
    );

    return this.newOrder.customerId === undefined ||
      this.newOrder.fromAddressId === undefined ||
      this.newOrder.toAddressId === undefined ||
      this.newOrder.date === undefined ||
      this.newOrder.serviceIds === undefined ||
      this.newOrder.serviceIds.length === 0
  }

  async submitUpdateOrder(event: Event) {
    event.stopPropagation()
    if (this.orderIsInvalid(this.newOrder)) { return }
    if (this.order?.id === undefined) { return }
    this.newOrder.id = this.order.id;
    await this.orderService.updateOrder(this.newOrder)
    this.isInEditMode = false
    this.orderUpdated.emit()
  }

  async deleteOrder() {
    if (this.order?.id === undefined) { return }
    await this.orderService.deleteOrder(this.order.id)
    this.orderUpdated.emit()
  }

  async submitNewOrder() {
    if (this.orderIsInvalid(this.newOrder)) { return }
    this.orderService.postOrder(this.newOrder)
    console.log(this.newOrder);
    this.router.navigate(['/find-order']);
  }
}
