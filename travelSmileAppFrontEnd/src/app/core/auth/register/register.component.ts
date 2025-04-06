import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { AuthRequest } from '../auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  imports: [ReactiveFormsModule],
})
export class RegisterComponent {
  form = inject(FormBuilder).group({
    email: [''],
    password: ['']
  });
  private router = inject(Router);
  private auth = inject(AuthService);

  onSubmit(): void {
    this.auth.register(this.form.getRawValue() as AuthRequest).subscribe({
      next: () => this.router.navigate(['/trips']),
      error: () => alert('Registration failed')
    });
  }
  
}
