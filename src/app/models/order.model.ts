import Address from "./address.model";
import Customer from "./customer.model";
import Service from "./service.model";

export default interface Order{
    id: number,
    customer: Customer,
    fromAddress: Address,
    toAddress: Address,
    orderComment: string,
    services: Service[]
}

export interface OrderForPost {
    id?: number,
    customerId?: number,
    fromAddressId?: number,
    toAddressId?: number,
    serviceIds: number[],
    orderComment?: string,
    date?: Date
}
