import { Injectable } from '@angular/core';
import Order from '../models/order.model';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs'

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

  public getOrderByCustomerId(id: Number): Promise<Order[]> {
    return this.http.get<Order[]>(`${environment.apiUrl}/api/order/by-customer-id/${id}`).pipe(
      catchError(errorResponse => { return throwError(errorResponse); })
    ).toPromise<Order[]>()
  }

  public getOrders(): Promise<Order[]> {
    console.log(environment);

    return this.http.get<Order[]>(`${environment.apiUrl}/api/order`).pipe(
      catchError(errorResponse => { return throwError(errorResponse); })
    ).toPromise<Order[]>();
  }

  public postOrder(order: Order): Promise<any> {
    return this.http.post(`${environment.apiUrl}/api/order`, order)
      .pipe(
        catchError(errorResponse => { return throwError(errorResponse.statusText); })
      ).toPromise();
  }
}
