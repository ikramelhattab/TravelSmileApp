import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TripService {
  private readonly apiUrl = 'http://localhost:8080/trips';

  constructor(private http: HttpClient) {}

  getTrips(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getTrip(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createTrip(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  updateTrip(data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${data.id}`, data);
  }
}
