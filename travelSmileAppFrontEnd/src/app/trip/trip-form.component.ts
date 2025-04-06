import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { TripService } from './trip.service';

@Component({
  selector: 'app-trip-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>{{ form.get('id')?.value ? 'Edit' : 'Create' }} Trip</h2>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <input formControlName="id" type="hidden">
      <div class="mb-3">
        <label class="form-label">Destination</label>
        <input class="form-control" formControlName="destination">
      </div>
      <div class="mb-3">
        <label class="form-label">Start Date</label>
        <input class="form-control" formControlName="startDate" type="date">
      </div>
      <div class="mb-3">
        <label class="form-label">End Date</label>
        <input class="form-control" formControlName="endDate" type="date">
      </div>
      <button type="submit" class="btn btn-success">Save</button>
    </form>
  `
})
export class TripFormComponent {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private tripService = inject(TripService);
  private router = inject(Router);

  form = this.fb.group({
    id: [null],
    destination: [''],
    startDate: [''],
    endDate: ['']
  });

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tripService.getTrip(+id).subscribe(trip => this.form.patchValue(trip));
    }
  }

  onSubmit() {
    const value = this.form.getRawValue();
    const obs = value.id ? this.tripService.updateTrip(value) : this.tripService.createTrip(value);
    obs.subscribe(() => this.router.navigate(['/trips']));
  }
}
