import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripService } from './trip.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h2>Trips</h2>
    <button routerLink="/trips/new" class="btn btn-primary">Add Trip</button>
    <ul class="list-group mt-3">
      <li *ngFor="let trip of trips" class="list-group-item d-flex justify-content-between">
        <span>{{ trip.destination }}</span>
        <a [routerLink]="['/trips', trip.id, 'edit']" class="btn btn-sm btn-outline-secondary">Edit</a>
      </li>
    </ul>
  `
})
export class TripListComponent {
  private tripService = inject(TripService);
  trips: any[] = [];

  ngOnInit() {
    this.tripService.getTrips().subscribe(trips => this.trips = trips);
  }
}
