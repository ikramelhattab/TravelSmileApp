import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TravelerService, Traveler } from './traveler.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-traveler-form',
  templateUrl: './traveler-form.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule]
})
export class TravelerFormComponent implements OnInit {
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required]
  });

  travelerId?: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private travelerService: TravelerService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.travelerId = +idParam;
      this.travelerService.getById(this.travelerId).subscribe(data => {
        this.form.patchValue(data);
      });
    }
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const traveler: Traveler = this.form.getRawValue() as Traveler;

    const action = this.travelerId
      ? this.travelerService.update(this.travelerId, traveler)
      : this.travelerService.create(traveler);

    action.subscribe(() => this.router.navigate(['/travelers']));
  }
}