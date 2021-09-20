import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import  Address  from '../models/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { };

  public getAddressById(id: Number): Promise<Address> {
    return this.http.get<Address>(`${environment.apiUrl}/api/address/${id}`).pipe(
      catchError(errorResponse => { return throwError(errorResponse); })
    ).toPromise<Address>()
  }

  public getAddresses(): Promise<Address[]> {
    return this.http.get<Address[]>(`${environment.apiUrl}/api/address`).pipe(
      catchError(errorResponse => { return throwError(errorResponse); })
    ).toPromise<Address[]>();
  }

}
