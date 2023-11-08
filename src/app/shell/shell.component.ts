import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageSwitchService } from '@app/@shared/language-switch/language-switch.service';
import { TranslateService } from '@ngx-translate/core';


import { Location } from '@angular/common';
import { INavigationConfig, INavigationItemHeading, INavigationItemLink, IProgressIndicatorConfig, LanguageHeaderFooterSwitchService, NavigationService } from 'ircc-ds-angular-component-library';
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
    private languageSwitchService: LanguageHeaderFooterSwitchService,
    private navService: NavigationService
  ) { }



  reason: INavigationItemLink = {
    id: 'reasonLink',
    label: 'Reason for visit',
    type: 'link',
    href: '',
    children: [],
    indicator: {status:'success', icon:'fa-regular fa-circle-check'}
  };

  purpose: INavigationItemHeading = {
    id: 'purposeNavTitle',
    label: 'Purpose',
    type: 'heading',
    iconLeading: '',
    children: []
  };

  personal: INavigationItemLink = {
    id: 'personalLink',
    label: 'Personal details',
    type: 'link',
    href: '',
    children: [],
    indicator: {status:'success', icon:'fa-regular fa-circle-check'}
  }

  residence: INavigationItemLink = {
    id: 'residenceLink',
    label: 'Residence history',
    type: 'link',
    href: '',
    children: [],
    indicator: {status:'success', icon:'fa-regular fa-circle-check'}
  }

  identification: INavigationItemLink = {
    id: 'identificationLink',
    label: 'Identification',
    type: 'link',
    href: '',
    children: [],
    indicator: {status:'success', icon:'fa-regular fa-circle-check'}
  }

  work: INavigationItemLink = {
    id: 'workLink',
    label: 'Work and school',
    type: 'link',
    href: '',
    children: [],
    indicator: {status:'success', icon:'fa-regular fa-circle-check'}
  }

  travel: INavigationItemLink = {
    id: 'travelLink',
    label: 'Travel information',
    type: 'link',
    href: '',
    children: [],
    indicator: {status:'success', icon:'fa-regular fa-circle-check'}
  }

  finance: INavigationItemLink = {
    id: 'financeLink',
    label: 'Financial details',
    type: 'link',
    href: '',
    children: [],
    indicator: {status:'success', icon:'fa-regular fa-circle-check'}
  }

  family: INavigationItemLink = {
    id: 'familyLink',
    label: 'Family details',
    type: 'link',
    href: '',
    children: [],
    indicator: {status:'success', icon:'fa-regular fa-circle-check'}
  }

  medical: INavigationItemLink = {
    id: 'medicalLink',
    label: 'Medical history',
    type: 'link',
    href: 'en/' + 'medical-history',
    children: [],
    indicator: {status:'success', icon:'fa-regular fa-circle-check'}
  }

  criminal: INavigationItemLink = {
    id: 'criminalLink',
    label: 'Criminal history',
    type: 'link',
    href: 'en/' + 'personal-information',
    children: [],
    indicator: {status:'success', icon:'fa-regular fa-circle-check'}
  }

  client: INavigationItemHeading = {
    id: 'clientNavTitle',
    label: 'Client details',
    type: 'heading',
    iconLeading: '',
    children: []
  }

  rightNavConfig: INavigationConfig = {
    id: 'right_nav',
    size: 'small',
    height: '71vh',
    marginTop: 700,
    scrolling: true,
    fixed: true,
    navigationConfig: [
      this.purpose,
      this.reason,
      this.client,
      this.personal, 
      this.residence, 
      this.identification, 
      this.work, 
      this.travel, 
      this.finance, 
      this.family, 
      this.medical, 
      this.criminal
    ]
  };


  progConfig : IProgressIndicatorConfig = {
    id: 'prog_indicator',
    steps: [
      {title: 'Fill in application', tagConfig: {
      id: 'progress_indicator_step1',
      type: 'primary'
      }},
      {title: 'Review application', tagConfig: {
        id: 'progress_indicator_step1',
        type: 'locked'
        }},
        {title: 'Pay fees', tagConfig: {
          id: 'progress_indicator_step1',
          type: 'locked'
          }},
          {title: 'Sign and submit', tagConfig: {
            id: 'progress_indicator_step1',
            type: 'locked'
            }},
    
    ]
  }
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

    this.navService.setNavConfig(this.rightNavConfig);
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
