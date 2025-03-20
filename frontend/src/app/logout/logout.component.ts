import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  error: string | null = null;

  constructor(
    private readonly cookieService: CookieService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.logout();
  }

  private logout(): void {
    try {
      this.cookieService.delete('jwt');
      this.router.navigate(['/login']);
    } catch (error) {
      this.error = 'Une erreur est survenue lors de la déconnexion';
      console.error('Error during logout:', error);
      this.router.navigate(['/login']);
    }
  }
}
