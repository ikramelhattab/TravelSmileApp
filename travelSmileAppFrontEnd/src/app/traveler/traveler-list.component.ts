import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TravelerService } from './traveler.service';
import { Traveler } from './traveler.model';

@Component({
  selector: 'app-traveler-list',
  templateUrl: './traveler-list.component.html',
})
export class TravelerListComponent implements OnInit {
  travelers: Traveler[] = [];

  constructor(private travelerService: TravelerService, private router: Router) {}

  ngOnInit(): void {
    this.loadTravelers();
  }

  loadTravelers(): void {
    this.travelerService.getAll().subscribe({
      next: data => this.travelers = data,
      error: err => console.error('Erreur chargement voyageurs', err)
    });
  }

  edit(id: number): void {
    this.router.navigate(['/travelers', id, 'edit']);
  }

  delete(id: number): void {
    if (confirm('Confirmer la suppression ?')) {
      this.travelerService.delete(id).subscribe({
        next: () => this.loadTravelers(),
        error: err => console.error('Erreur suppression', err)
      });
    }
  }
}