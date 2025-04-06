import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Traveler {
  id?: number;
  name: string;
  email: string;
  phone: string;
}

@Injectable({ providedIn: 'root' })
export class TravelerService {
  private readonly apiUrl = 'http://localhost:8080/travelers';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Traveler[]> {
    return this.http.get<Traveler[]>(this.apiUrl);
  }

  getById(id: number): Observable<Traveler> {
    return this.http.get<Traveler>(`${this.apiUrl}/${id}`);
  }

  create(traveler: Traveler): Observable<Traveler> {
    return this.http.post<Traveler>(this.apiUrl, traveler);
  }

  update(id: number, traveler: Traveler): Observable<Traveler> {
    return this.http.put<Traveler>(`${this.apiUrl}/${id}`, traveler);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}