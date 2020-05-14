import { Injectable } from '@angular/core';


@Injectable({
    provideIn : 'root'
})


export class CanActivateLoginGuard implements CanActivate {
    canActivate(
        next:ActivateRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree | Promise<boolean | UrlTree> | boolean | Url {
        if(sessionStorage.getItem('login')){
            console.log("User is login");
            return true;
        }
        console.log("Not login");
        return false;
    }

}