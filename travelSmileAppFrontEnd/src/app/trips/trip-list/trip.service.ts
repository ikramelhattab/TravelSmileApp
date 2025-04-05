import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TripService {
  private baseUrl = 'http://localhost:8080/api/trips';

  constructor(private http: HttpClient) {}

  getTrips() {
    return this.http.get(this.baseUrl);
  }

  createTrip(trip: any) {
    return this.http.post(this.baseUrl, trip);
  }

  updateTrip(id: number, trip: any) {
    return this.http.put(`${this.baseUrl}/${id}`, trip);
  }

  deleteTrip(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}