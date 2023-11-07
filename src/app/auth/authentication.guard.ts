import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { Logger } from '@shared';
import { CredentialsService } from './credentials.service';

const log = new Logger('AuthenticationGuard');

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router,
              private credentialsService: CredentialsService,
              private translate: TranslateService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.credentialsService.getIsAuthorized()) {
      return true;
    } return true; //so that we can access the rest of the site. Remove for prod

    log.debug('Not authenticated, redirecting and adding redirect url...');


    let french = this.router.url.includes('/fr') ? 'fr' : 'en';
    let navTo = '';
    french ? (navTo = '/connexion') : (navTo = '/login');
    this.translate.use(french ? 'fr' : 'en');

    this.router.navigate([navTo], { queryParams: { redirect: state.url }, replaceUrl: true });

    return false;
  }

}
