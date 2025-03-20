import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, Route, Router, UrlSegment } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
    providedIn: 'root'
})
export class NotLoggedGuard implements CanActivate {
    constructor(private cookieService: CookieService,
        private router: Router) {
    }

    canActivate(): boolean {
        let token = this.cookieService.get('jwt')
        console.log(token)
        if (token.length > 0) {
            this.router.navigate(['home']);
            return false;
        }
        else
            return true;
    }
}