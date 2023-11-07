import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageSwitchService } from '@app/@shared/language-switch/language-switch.service';
import { TranslateService } from '@ngx-translate/core';
import {
  IProgressIndicatorConfig,
  Orientations
} from 'ircc-ds-angular-component-library';
import { BehaviorSubject, Observable } from 'rxjs';

export interface IDemoFormDataInterface {
  ['family-name']?: string;
  ['given-name']?: string;
  ['sex-at-birth']?: string;
  ['date-requested-datepicker_yearControl']?: string;
  ['date-requested-datepicker_monthControl']?: string;
  ['date-requested-datepicker_dayControl']?: string;
  ['country']?: string;
  ['city']?: string;
  ['declaration']?: boolean;
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class AccessbilityDemoFormStateService {
  private formData = new BehaviorSubject<IDemoFormDataInterface>({});
  formObs = this.formData.asObservable();
  private storageKey: string = 'formData';

  constructor(
    private router: Router,
    private translate: TranslateService,
  ) { }
  progressIndicatorConfig: IProgressIndicatorConfig = {
    id: 'progress_indicator',
    selected: 1,
    steps: [
      {
        title: 'ACC_DEMO.BACKGROUNDINFO',
        tagConfig: {
          id: 'progress_indicator_step1',
          type: 'success'
        }
      },
      {
        title: 'ACC_DEMO.PERSONAL_INFO.H1',
        tagConfig: {
          id: 'progress_indicator_step2',
          type: 'primary'
        }
      },
      {
        title: 'ACC_DEMO.STEPPER.STEP3',
        tagConfig: {
          id: 'progress_indicator_step3',
          type: 'locked'
        }
      },
      {
        title: 'ACC_DEMO.STEPPER.STEP4',
        tagConfig: {
          id: 'progress_indicator_step4',
          type: 'locked'
        }
      }
    ]
  };

  private progressIndicatorSubj = new BehaviorSubject<IProgressIndicatorConfig>(
    this.progressIndicatorConfig
  );
  progressIndicatorObs$ = this.progressIndicatorSubj.asObservable();

  /**
   * Update the entire indicator config
   * @param config IProgressIndicatorConfig
   */
  updateProgressIndicator(config: IProgressIndicatorConfig) {
    this.progressIndicatorConfig = config;
    this.progressIndicatorSubj.next(this.progressIndicatorConfig);
  }

  /**
   * Update which element in the indicator is selected
   * @param selected number - index number of element to be selected
   */
  updateSelected(selected: number) {
    this.progressIndicatorConfig.selected = selected;
    this.progressIndicatorSubj.next(this.progressIndicatorConfig);
  }

  /**
   * Update the indicator to be vertical or horizontal
   * @param orientation either 'vertical' or 'horizontal'
   */
  updateOrientation(orientation: keyof typeof Orientations) {
    this.progressIndicatorConfig.orientation = orientation;
    this.progressIndicatorSubj.next(this.progressIndicatorConfig);
  }

  progressTabButtonEvent(event: any) {
    const eventInt = parseInt(event.toString());
    const curLang = this.translate.currentLang;
    const lang = curLang === 'en-US' || curLang === 'en' ? 'en' : 'fr';
    
    if (this.progressIndicatorConfig.selected !== undefined) {
      if (eventInt !== this.progressIndicatorConfig.selected) {
        switch (eventInt) {
          case 0:
            if (this.router.url !== lang +
              '/' + this.translate.instant('ROUTES.BackgroundInfo'))
              this.router.navigateByUrl(lang +
              '/' + this.translate.instant('ROUTES.BackgroundInfo'));
            break;
          case 1:
            if (this.router.url !== lang +
              '/' + this.translate.instant('ROUTES.PersonalInfo'))
              this.router.navigateByUrl(lang +
            '/' + this.translate.instant('ROUTES.PersonalInfo'));
            break;
          case 2:
            if (this.router.url !== lang +
              '/' + this.translate.instant('ROUTES.WorkInfo'))
              this.router.navigateByUrl(lang +
                '/' + this.translate.instant('ROUTES.WorkInfo'));
            break;
        }
      }
    }
  }

  setFormData(data: IDemoFormDataInterface) {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
    this.formData.next(data);
  }

  getFormData(): Observable<IDemoFormDataInterface> {
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      this.formData.next(JSON.parse(data));
    }
    return this.formObs;
  }

  navigationHandler(action: string) {
    const curLang = this.translate.currentLang;
    console.log(curLang);
    console.log(this.router.url);
    const lang = curLang === 'en-US' || curLang === 'en' ? 'en' : 'fr';

    const homePage = '/' + lang //base route 
    const backgroundInfoPage = '/' + lang +
      '/' + this.translate.instant('ROUTES.BackgroundInfo');
    const personalInfoPage = '/' + lang +
      '/' + this.translate.instant('ROUTES.PersonalInfo');
    const workInfoPage = '/' + lang +
      '/' + this.translate.instant('ROUTES.WorkInfo');

    switch (this.router.url) {
      case homePage:
        if (action === 'next') {
          this.router.navigateByUrl(backgroundInfoPage);
        } else {
          this.router.navigateByUrl(homePage)
        }
        break;
      case backgroundInfoPage:
        if (action === 'next') {
          this.router.navigateByUrl(personalInfoPage);
        } else {
          this.router.navigateByUrl(homePage)
        }
        break;
      case personalInfoPage:
        if (action === 'next') {
          this.router.navigateByUrl(workInfoPage);
        } else {
          this.router.navigateByUrl(backgroundInfoPage);
        }
        break;
      case workInfoPage:
        if (action === 'next') {
          this.router.navigateByUrl(workInfoPage);
        } else {
          this.router.navigateByUrl(personalInfoPage);
        }
        break;
    }
  }
}
