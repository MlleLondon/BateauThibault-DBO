import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, Router, UrlSegment } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private cookieService: CookieService,
        private router: Router) {
    }

    canActivate(): boolean {
        let token = this.cookieService.get('jwt')
        if (token == '') {
            console.log("if")
            this.router.navigate(['login']);
            return false;
        }
        else
            return true;
    }
}
