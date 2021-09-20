import { Injectable } from '@angular/core';
import Order, { OrderForPost } from '../models/order.model';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs'
import Service from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { };

  public getOrderById(id: Number): Promise<Order> {
    return this.http.get<Order>(`${environment.apiUrl}/api/order/${id}`).pipe(
      catchError(errorResponse => { return throwError(errorResponse); })
    ).toPromise<Order>()
  }

  createDateObjectsFromStrings(services: Service[]) {
    return services.map(service => {
      service.date = new Date(service.date)
      return service
    })
  }

  public getOrderByCustomerId(id: Number): Promise<Order[]> {
    return this.http.get<Order[]>(`${environment.apiUrl}/api/order/by-customer-id/${id}`).pipe(
      map((orders: Order[]) => orders.map(order => {
        order.services = this.createDateObjectsFromStrings(order.services)
        return order;
      })),
      catchError(errorResponse => { return throwError(errorResponse); })
    ).toPromise<Order[]>()
  }

  public getOrders(): Promise<Order[]> {
    console.log(environment);

    return this.http.get<Order[]>(`${environment.apiUrl}/api/order`).pipe(
      catchError(errorResponse => { return throwError(errorResponse); })
    ).toPromise<Order[]>();
  }

  public postOrder(order: OrderForPost): Promise<any> {
    return this.http.post(`${environment.apiUrl}/api/order`, order)
      .pipe(
        catchError(errorResponse => { return throwError(errorResponse.statusText); })
      ).toPromise();
  }
  public updateOrder(order: OrderForPost): Promise<any> {
    console.log(order);

    return this.http.put(`${environment.apiUrl}/api/order`, order)
      .pipe(
        catchError(errorResponse => { return throwError(errorResponse.statusText); })
      ).toPromise();
  }
  public deleteOrder(id: number): Promise<any> {
    return this.http.delete(`${environment.apiUrl}/api/order/${id}`)
      .pipe(
        catchError(errorResponse => { return throwError(errorResponse.statusText); })
      ).toPromise();
  }
}
