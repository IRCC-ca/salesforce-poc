import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageSwitchService } from '@app/@shared/language-switch/language-switch.service';
import { TranslateService } from '@ngx-translate/core';


import { Location } from '@angular/common';
import { LanguageHeaderFooterSwitchService } from 'ircc-ds-angular-component-library';
import { environment } from '@env/environment';

export enum Languages {
  English = 'en',
  French = 'fr'
}

export enum DisplayLanguages {
  EN = 'EN',
  FR = 'FR',
  English = 'English',
  French = 'Français'
}
@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  /** String for storing the URL of the page with the alternative language set */
  altLangURL: string = "";
  altPathKey: string = "";
  language: string = this.translate.currentLang;
  /** Boolean for whether the current window size is mobile or not */
  isMobile = false;
  dateModified = environment.dateModified;
  constructor(
    private translate: TranslateService,
    private altLang: LanguageSwitchService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object,
    private location: Location,
    private languageSwitchService: LanguageHeaderFooterSwitchService
  ) { }

  /** Sets the alt language string and subscribes to language changes that occur if the link is clicked */
  ngOnInit() {
    this.altLang.getAltLangLink().subscribe((altLang: string) => {
      this.altPathKey = altLang;
      this.setAltLangURL();
    });

    this.languageSwitchService.languageClickObs$.subscribe(response => {
      if (response) this.changeLang();  
      //TODO: This can be changed to simply (response) once the library changes have been published
    });
  }

  /*************** LANGUAGE FUNCTIONS ********************/

  /** Toggles language without reloading component */
  changeLang() {
    // e.preventDefault();
    // Swaps language
    const curLang = this.translate.currentLang;
    this.translate.use(
      curLang === Languages.English ? Languages.French : Languages.English
    );
    // Changes the html lang attribute
    document.documentElement.lang =
      curLang === Languages.English ? Languages.French : Languages.English;
    // Pushes page into history to allow the use of the 'Back' button on browser
    window.history.pushState('', '', this.altLangURL);
    this.setAltLangURL();

    this.router.navigateByUrl(this.altLangURL);
    this.changeLangStr();
  }

  setAltLangURL() {
    this.altLangURL = this.translate.currentLang ?? Languages.English;
    if (this.altPathKey)
      this.altLangURL +=
        '/' + this.translate.instant('ROUTES.' + this.altPathKey);
  }

  /** Change display string of language **/
  changeLangStr() {
    const curLang = this.translate.currentLang;
    if (this.isMobile) {
      curLang === Languages.English
        ? (this.language = DisplayLanguages.FR)
        : (this.language = DisplayLanguages.EN);
    } else {
      curLang === Languages.English
        ? (this.language = DisplayLanguages.French)
        : (this.language = DisplayLanguages.English);
    }
  }

  /** Required to implement OnDestroy, which triggers the UnitDestroyed function */
  ngOnDestroy() { }

}
