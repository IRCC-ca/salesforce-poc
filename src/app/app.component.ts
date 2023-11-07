import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { merge } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { I18nService } from '@app/i18n';

import enUS from '../../src/translations/en-US.json';
import frFR from '../../src/translations/fr-FR.json';

const log = new Logger('App');

@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private translate: TranslateService,
    private i18nService: I18nService) {
    translate.setTranslation('en', enUS);
    translate.setTranslation('fr', frFR);
    //Set initial language
    /**
     * Subscribe to router events because the init cycle for this component happens
     * before the router functionality
     */
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.translate.use(this.router.url.includes('/fr') ? 'fr' : 'en');
        //Sets the html language attribute to current language
        document.documentElement.lang = this.translate.currentLang.substring(0, 2);
      }
    });
  }



  ngOnInit() {
    this.router.events.subscribe(event => {
    })
    // Setup logger
    if (environment.production) {
      Logger.enableProductionMode();
    }

    log.debug('init');
  }

  ngOnDestroy() {
    this.i18nService.destroy();
  }

}
