import Address from "./address.model";

export default interface Customer {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    currentAddress: Address
}
