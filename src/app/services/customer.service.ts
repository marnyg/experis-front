import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Customer from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { };

  public getCustomerById(id: Number): Promise<Customer> {
    return this.http.get<Customer>(`${environment.apiUrl}/api/customer/${id}`).pipe(
      catchError(errorResponse => { return throwError(errorResponse); })
    ).toPromise<Customer>()
  }

  public getCustomers(): Promise<Customer[]> {
    console.log(environment);

    return this.http.get<Customer[]>(`${environment.apiUrl}/api/customer`).pipe(
      catchError(errorResponse => { return throwError(errorResponse); })
    ).toPromise<Customer[]>();
  }

}
