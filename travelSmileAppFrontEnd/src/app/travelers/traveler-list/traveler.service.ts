import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TravelerService {
  private baseUrl = 'http://localhost:8080/api/travelers';

  constructor(private http: HttpClient) {}

  getTravelers() {
    return this.http.get(this.baseUrl);
  }

  addTraveler(traveler: any) {
    return this.http.post(this.baseUrl, traveler);
  }

  getTravelerTrips(id: number) {
    return this.http.get(`${this.baseUrl}/${id}/trips`);
  }
}