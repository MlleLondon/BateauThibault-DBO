import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        private readonly cookieService: CookieService,
        private readonly router: Router
    ) {}

    canActivate(): boolean {
        const token = this.cookieService.get('jwt');
        
        if (!token) {
            this.router.navigate(['/login']);
            return false;
        }
        
        return true;
    }
}
