import Address from "./address.model";
import Customer from "./customer.model";

export default interface Order {
    id: number,
    customer: Customer,
    fromAddresss: Address,
    toAddresss: Address,
    orderComment: string,
}
