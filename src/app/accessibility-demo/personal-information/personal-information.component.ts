import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  IBannerConfig,
  ICheckBoxComponentConfig,
  IDatePickerConfig,
  IInputComponentConfig,
  IProgressIndicatorConfig,
  IRadioInputComponentConfig,
  ISelectConfig,
  ISelectOptionsConfig,
  LabelButtonService,
} from 'ircc-ds-angular-component-library';
import { TranslateService } from '@ngx-translate/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, first } from 'rxjs';
import { LanguageSwitchService } from '@app/@shared/language-switch/language-switch.service';
import { AccessbilityDemoFormStateService, IDemoFormDataInterface } from '../accessbility-demo-form-state.service';
import { requiredTrueValidator } from '@app/@shared/shared-validators';


export interface ICityOfBirth {
  lov: string;
  val: string;
}

export const CITIES_OF_BIRTH_LOVS_CANADA: ICityOfBirth[] = [
  {
    lov: 'ACC_DEMO.PERSONAL_INFO.CITY_OF_BIRTH.OPTIONS.CANADA.OTTAWA',
    val: 'Ottawa'
  },
  {
    lov: 'ACC_DEMO.PERSONAL_INFO.CITY_OF_BIRTH.OPTIONS.CANADA.ST_JOHNS',
    val: "St. John's"
  },
  {
    lov: 'ACC_DEMO.PERSONAL_INFO.CITY_OF_BIRTH.OPTIONS.CANADA.VICTORIA',
    val: 'Victoria'
  },
  {
    lov: 'ACC_DEMO.PERSONAL_INFO.CITY_OF_BIRTH.OPTIONS.CANADA.CALGARY',
    val: 'Calgary'
  }
];
export const CITIES_OF_BIRTH_LOVS_MEXICO: ICityOfBirth[] = [
  {
    lov: 'ACC_DEMO.PERSONAL_INFO.CITY_OF_BIRTH.OPTIONS.MEXICO.MEXICO',
    val: 'Mexico City'
  }
];
export const CITIES_OF_BIRTH_LOVS_USA: ICityOfBirth[] = [
  {
    lov: 'ACC_DEMO.PERSONAL_INFO.CITY_OF_BIRTH.OPTIONS.USA.TAMPA',
    val: 'Tampa Bay'
  },
  {
    lov: 'ACC_DEMO.PERSONAL_INFO.CITY_OF_BIRTH.OPTIONS.USA.WASHINGTON',
    val: 'Washington'
  },
  {
    lov: 'ACC_DEMO.PERSONAL_INFO.CITY_OF_BIRTH.OPTIONS.USA.NEW_YORK',
    val: 'New York'
  },
  {
    lov: 'ACC_DEMO.PERSONAL_INFO.CITY_OF_BIRTH.OPTIONS.USA.OAKLAND',
    val: 'Oakland'
  }
];
export const CITIES_OF_BIRTH_LOVS_ALL: ICityOfBirth[] = [
  ...CITIES_OF_BIRTH_LOVS_CANADA,
  ...CITIES_OF_BIRTH_LOVS_MEXICO,
  ...CITIES_OF_BIRTH_LOVS_USA
];
@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit {
  @ViewChild('errorBanner') errorBannerRef?: ElementRef;
  altPathKey = '';
  altLangURL = '';
  form = new FormGroup({});
  nextClicked = false;
  showErrorBanner = false;
  showFamilyNameBanner = false;
  showSexAtBirthBanner = false;
  formData: IDemoFormDataInterface = {};
  innerWidth = 0;

  routerSub?: Subscription;
  labelButtonSub?: Subscription;

  progressIndicatorSub?: Subscription;
  progressIndicatorConfig: IProgressIndicatorConfig = {
    id: ''
  };

  hiddenNavConfig = {
    id: 'hidden_nav',
    skipLinks: [
      {
        title: 'Skip to main content',
        href: 'ds-cont'
      },
      {
        title: 'Skip to form',
        href: 'ds-form'
      },
      {
        title: 'Skip to footer',
        href: 'ds-footer'
      }
    ]
  };

  errorBannerConfig: IBannerConfig = {
    id: 'error_banner',
    type: 'critical',
    title: 'ACC_DEMO.PERSONAL_INFO.ERROR_BANNER.TITLE',
    content: 'ACC_DEMO.PERSONAL_INFO.ERROR_BANNER.CONTENT',
    rounded: true
  };

  familyNameInputConfig: IInputComponentConfig = {
    id: 'family_name_input',
    formGroup: this.form,
    required: true,
    label: 'ACC_DEMO.PERSONAL_INFO.FAMILY_NAME_INPUT.LABEL',
    desc: 'ACC_DEMO.PERSONAL_INFO.FAMILY_NAME_INPUT.DESC',
    labelIconConfig: {
      iconClass: 'fa-light fa-circle-info',
      ariaText: 'ACC_DEMO.MORE_INFO'
    },
    errorMessages: [
      {
        key: 'required',
        errorLOV: 'ACC_DEMO.ERRORS.FAMILY_NAME_REQUIRED'
      }
    ]
  };

  familyNameInputBannerConfig: IBannerConfig = {
    id: 'family_name_input_info_banner',
    dismissible: true,
    ariaDissmissible: 'ACC_DEMO.PERSONAL_INFO.FAMILY_NAME_INPUT.BANNER_CLOSE',
    type: 'info',
    content: 'ACC_DEMO.PERSONAL_INFO.FAMILY_NAME_INPUT.BANNER'
  };

  givenNameInputConfig: IInputComponentConfig = {
    id: 'given_name_input',
    formGroup: this.form,
    label: 'ACC_DEMO.PERSONAL_INFO.GIVEN_NAME_INPUT.LABEL',
    desc: 'ACC_DEMO.PERSONAL_INFO.GIVEN_NAME_INPUT.DESC'
  };

  sexAtBirthRadioConfig: IRadioInputComponentConfig = {
    id: 'sex_at_birth_radio',
    formGroup: this.form,
    required: true,
    label: 'ACC_DEMO.PERSONAL_INFO.SEX_AT_BIRTH_RADIO.LABEL',
    labelIconConfig: {
      iconClass: 'fa-light fa-circle-info',
      ariaText: 'ACC_DEMO.MORE_INFO'
    },
    options: [
      {
        text: 'ACC_DEMO.PERSONAL_INFO.SEX_AT_BIRTH_RADIO.FEMALE',
        value: 'F'
      },
      {
        text: 'ACC_DEMO.PERSONAL_INFO.SEX_AT_BIRTH_RADIO.MALE',
        value: 'M'
      },
      {
        text: 'ACC_DEMO.PERSONAL_INFO.SEX_AT_BIRTH_RADIO.OTHER',
        value: 'X'
      }
    ],
    errorMessages: [
      {
        key: 'required',
        errorLOV: 'ERROR.requiredRadioError'
      }
    ]
  };

  sexAtBirthRadioBannerConfig: IBannerConfig = {
    id: 'sex_at_birth_info_banner',
    dismissible: true,
    ariaDissmissible: 'ACC_DEMO.PERSONAL_INFO.SEX_AT_BIRTH_RADIO.BANNER_CLOSE',
    type: 'info',
    content: 'ACC_DEMO.PERSONAL_INFO.SEX_AT_BIRTH_RADIO.BANNER'
  };

  dateOfBirthDatePickerConfig: IDatePickerConfig = {
    id: 'date_of_birth_date_picker',
    formGroup: this.form,
    label: 'ACC_DEMO.PERSONAL_INFO.DATE_OF_BIRTH.LABEL',
    required: true,
    errorMessages: [
      {
        key: 'required',
        errorLOV: 'ACC_DEMO.ERRORS.DOB_REQUIRED'
      }
    ],
    unknownDateToggle: {
      dayUnknown: true,
      monthUnknown: true,
      yearUnknown: true
    }
  };

  countryOfBirthSelectConfig: ISelectConfig = {
    id: 'contry_of_birth_select',
    formGroup: this.form,
    placeholder: 'General.Placeholder',
    label: 'ACC_DEMO.PERSONAL_INFO.COUNTRY_OF_BIRTH.LABEL',
    required: true,
    options: [
      {
        text: 'ACC_DEMO.PERSONAL_INFO.COUNTRY_OF_BIRTH.OPTIONS.CANADA',
        value: 'Canada'
      },
      {
        text: 'ACC_DEMO.PERSONAL_INFO.COUNTRY_OF_BIRTH.OPTIONS.USA',
        value: 'USA'
      },
      {
        text: 'ACC_DEMO.PERSONAL_INFO.COUNTRY_OF_BIRTH.OPTIONS.MEXICO',
        value: 'Mexico'
      }
    ],
    errorMessages: [
      {
        key: 'required',
        errorLOV: 'ERROR.requiredRadioError'
      }
    ]
  };

  cityOfBirthSelectConfig: ISelectConfig = {
    id: 'city_of_birth_select',
    formGroup: this.form,
    label: 'ACC_DEMO.PERSONAL_INFO.CITY_OF_BIRTH.LABEL',
    required: true,
    placeholder: 'General.Placeholder',
    options: [], //Set in init
    errorMessages: [
      {
        key: 'required',
        errorLOV: 'ERROR.requiredRadioError'
      }
    ]
  };

  declarationCheckboxConfig: ICheckBoxComponentConfig = {
    id: 'declaration_checkbox',
    formGroup: this.form,
    required: true,
    label: 'ACC_DEMO.PERSONAL_INFO.DECLARATION.LABEL',
    inlineLabel: 'ACC_DEMO.PERSONAL_INFO.DECLARATION.INLINE_LABEL',
    errorMessages: [
      {
        key: 'requiredTrue',
        errorLOV: 'ACC_DEMO.ERRORS.DECLARATION_REQUIRED'
      }
    ]
  };

  constructor(
    private translate: TranslateService,
    private altLang: LanguageSwitchService,
    private router: Router,
    private formService: AccessbilityDemoFormStateService,
    private labelButton: LabelButtonService,
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    this.updateProgressBarOrientation();
  }

  ngAfterViewInit() {
    /**
     * Set local storage form data when form values change after init so we're not setting and getting at the same time
     *
     */
    this.form.valueChanges.subscribe((val) => {
      this.setFormData(val);
    });
  }

  ngOnInit() {
    //Set orientation of the progress bar and get initial window width
    this.innerWidth = window.innerWidth;
    this.updateProgressBarOrientation();

    //if the page has moved to this one via a back or forward browser button, this detects the move and updates the page.
    this.formService.updateSelected(1);
    this.routerSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.formService.updateSelected(1);
      }
    });

    this.altLang.setAltLangLink('PersonalInfo');

    this.progressIndicatorSub =
      this.formService.progressIndicatorObs$.subscribe((response: any) => {
        this.progressIndicatorConfig = response;
      });

    //Handle label button presses
    this.labelButton.buttonPress(''); //reset the button BehaviourSubject
    this.labelButtonSub = this.labelButton.labelButtonClickObs$.subscribe(
      (response) => {
        this.iconButtonHandler(response);
      }
    );

    //Initial pop of cities is all values
    this.setCities(CITIES_OF_BIRTH_LOVS_ALL);

    this.form.addControl(
      this.familyNameInputConfig.id,
      new FormControl('', Validators.required)
    );
    this.form.addControl(this.givenNameInputConfig.id, new FormControl());
    this.form.addControl(
      this.sexAtBirthRadioConfig.id,
      new FormControl('', Validators.required)
    );
    this.form.addControl(
      this.dateOfBirthDatePickerConfig.id + '_dayControl',
      new FormControl('', Validators.required)
    );
    this.form.addControl(
      this.dateOfBirthDatePickerConfig.id + '_monthControl',
      new FormControl('', Validators.required)
    );
    this.form.addControl(
      this.dateOfBirthDatePickerConfig.id + '_yearControl',
      new FormControl('', Validators.required)
    );
    this.form.addControl(this.cityOfBirthSelectConfig.id, new FormControl('', Validators.required));
    this.form.addControl(
      this.countryOfBirthSelectConfig.id,
      new FormControl('', Validators.required)
    );
    this.form.addControl(this.declarationCheckboxConfig.id, new FormControl('', [Validators.required, requiredTrueValidator()]));

    //Watch for changes in the country of birth select:
    this.form
      .get(this.countryOfBirthSelectConfig.id)
      ?.valueChanges.subscribe((change) => {
        switch (change.toLowerCase()) {
          case 'canada':
            this.setCities(CITIES_OF_BIRTH_LOVS_CANADA);
            break;
          case 'usa':
            this.setCities(CITIES_OF_BIRTH_LOVS_USA);
            break;
          case 'mexico':
            this.setCities(CITIES_OF_BIRTH_LOVS_MEXICO);
            break;
          default:
            this.setCities(CITIES_OF_BIRTH_LOVS_ALL);
            break;
        }
      });

    /**
* Get local storage form data on page reload
*/
    this.getFormDataFromService();
  }

  /**
   * Set the cities option in the cities dropdown
   * @param cityList list of cities to insert into the dropdown
   */
  setCities(cityList: ICityOfBirth[]) {
    // this.cityOfBirthSelectConfig.options = [];
    let temp: ISelectOptionsConfig[] = [];
    cityList.forEach((city) => {
      temp.push({ text: city.lov, value: city.val });
    });
    temp = temp.sort((a, b) => {
      return compare(
        this.translate.instant(a.text),
        this.translate.instant(b.text),
        false
      );
    });
    this.cityOfBirthSelectConfig.options = temp;
  }

  /**
   * Update the progress indicator status (unlock/lock the next element)
   */
  updateProgressIndicator() {
    if (
      this.progressIndicatorConfig.steps &&
      (this.progressIndicatorConfig.steps[2].tagConfig.type === 'locked' ||
        this.progressIndicatorConfig.steps[2].tagConfig.type === 'notStarted')
    ) {
      const tempConfig = this.progressIndicatorConfig;
      if (tempConfig.steps) {
        if (this.form.valid) {
          tempConfig.steps[2].tagConfig.type = 'notStarted';
          this.formService.updateProgressIndicator(tempConfig);
        } else {
          tempConfig.steps[2].tagConfig.type = 'locked';
          this.formService.updateProgressIndicator(tempConfig);
        }
      }
    }
  }

  /**
   * Update the orientation of the progress bar
   */
  updateProgressBarOrientation() {
    if (
      this.innerWidth < 980 &&
      (this.progressIndicatorConfig.orientation === 'horizontal' ||
        this.progressIndicatorConfig.orientation === undefined)
    ) {
      this.formService.updateOrientation('vertical');
    } else if (
      this.innerWidth > 980 &&
      (this.progressIndicatorConfig.orientation === 'vertical' ||
        this.progressIndicatorConfig.orientation === undefined)
    ) {
      this.formService.updateOrientation('horizontal');
    }
  }

  /**
   * Event handler for progress tabs button events
   * @param event number (index of tab pressed)
   */
  progressTabButtonEvent(event: Event) {
      this.formService.progressTabButtonEvent(event);
  }

  /**
   * Event handler for icon button press events
   * @param event string (id of button pressed)
   */
  iconButtonHandler(id: string) {
    switch (id) {
      case this.familyNameInputConfig.id:
        this.showFamilyNameBanner = true;
        break;

      case this.sexAtBirthRadioConfig.id:
        this.showSexAtBirthBanner = true;
        break;

      default:
        break;
    }
  }

  /**
   * Once triggered, this tracks if the form is valid and updates the showErrorBanner variable accordingly
   */
  navButton() {
    this.nextClicked = true;
    this.form.markAllAsTouched();
    this.updateProgressIndicator();
    if (!this.form.valid) {
      this.showErrorBanner = true;
      this.form.valueChanges.subscribe(() => {
        this.showErrorBanner = !this.form.valid;
        this.updateProgressIndicator();
      });

      setTimeout(() => {
        this.errorBannerRef?.nativeElement.scrollIntoView({
          behavior: 'smooth'
        });
      });
    } else {
      const tempConfig = this.progressIndicatorConfig;
      if (tempConfig.steps) {
        tempConfig.steps[1].tagConfig.type = 'success';
        tempConfig.steps[2].tagConfig.type = 'primary';
      }
      this.formService.updateProgressIndicator(tempConfig);
      this.nextPage();
    } //NOTE: No need to deal with cases not covered above, since those will result in navigation!
  }

  /**
   * Event handler for banner close button events
   * @param id
   */
  bannerCloseHandler(id: string) {
    switch (id) {
      case this.familyNameInputBannerConfig.id:
        this.showFamilyNameBanner = false;
        break;

      case this.sexAtBirthRadioBannerConfig.id:
        this.showSexAtBirthBanner = false;
        break;

      default:
        break;
    }
  }

  /************************************Getters for Navigation**************************************/

  /**
   * Getter for the previous page button
   */
  previousPage() {
    this.formService.navigationHandler('prev');

  }

  nextPage() {
    this.formService.navigationHandler('next');

  }

  /**
 * Get local storage form data on page reload from the RequestFormService
 */
  getFormDataFromService() {
    this.formService
      .getFormData()
      .pipe(first()) //take only the first to avoid infinite loop
      .subscribe((val) => {
        this.formData = val;
        this.form.patchValue(this.formData);
        this.form.updateValueAndValidity();
      });
  }

  /**
 * Set local storage form data on page reload with the service
 */
  setFormData(requestFormData: IDemoFormDataInterface): void {
    return this.formService.setFormData(requestFormData);
  }

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
    this.progressIndicatorSub?.unsubscribe();
  }
}

/**
 * Compares two items and returns either -1 or 1, depending on which should come first. Used for .sort()
 * @param a Item 1
 * @param b Item 2
 * @returns 1 or -1, depending which value should come first.
 */
export function compare(
  a: number | string,
  b: number | string,
  isAsc: boolean
) {
  return isAsc ? (a < b ? 1 : -1) : a > b ? 1 : -1;
}


