import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import ServiceType from '../models/serviceType.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {

  constructor(private http: HttpClient) { };

  public getServiceById(id: Number): Promise<ServiceType> {
    return this.http.get<ServiceType>(`${environment.apiUrl}/api/serviceType/${id}`).pipe(
      catchError(errorResponse => { return throwError(errorResponse); })
    ).toPromise<ServiceType>()
  }

  public getServices(): Promise<ServiceType[]> {
    return this.http.get<ServiceType[]>(`${environment.apiUrl}/api/serviceType`).pipe(
      catchError(errorResponse => { return throwError(errorResponse); })
    ).toPromise<ServiceType[]>();
  }
}
