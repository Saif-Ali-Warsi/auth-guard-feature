import { Component, inject } from '@angular/core';
import { AuthService } from '../../core/services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private route = inject(Router);

  private auth = inject(AuthService);

  logout() {
    this.auth.logout();

    this.route.navigate(['/login']);
  }
}
