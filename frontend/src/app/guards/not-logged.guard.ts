import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class NotLoggedGuard implements CanActivate {
    constructor(
        private readonly cookieService: CookieService,
        private readonly router: Router
    ) {}

    canActivate(): boolean {
        const token = this.cookieService.get('jwt');
        
        if (token) {
            this.router.navigate(['/home']);
            return false;
        }
        
        return true;
    }
}