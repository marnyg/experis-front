import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Service from '../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { };

  public getServiceById(id: Number): Promise<Service> {
    return this.http.get<Service>(`${environment.apiUrl}/api/service/${id}`).pipe(
      catchError(errorResponse => { return throwError(errorResponse); })
    ).toPromise<Service>()
  }

  public getServices(): Promise<Service[]> {
    console.log(environment);

    return this.http.get<Service[]>(`${environment.apiUrl}/api/service`).pipe(
      catchError(errorResponse => { return throwError(errorResponse); })
    ).toPromise<Service[]>();
  }
}
