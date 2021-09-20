import Order from "./order.model"
import ServiceType from "./serviceType.model"

export default interface Service{
    id: number,
    order:Order,
    serviceType:ServiceType,
    date:Date
}
