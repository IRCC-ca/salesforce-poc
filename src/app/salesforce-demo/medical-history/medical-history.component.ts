import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { LanguageSwitchService } from '@app/@shared/language-switch/language-switch.service';
import { TranslateService } from '@ngx-translate/core';
import { IProgressIndicatorConfig, IIconButtonComponentConfig, IRadioInputComponentConfig, IInputComponentConfig } from 'ircc-ds-angular-component-library';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SalesforceDemoFormStateService } from '../salesforce-demo-form-state.service';

@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrls: ['./medical-history.component.scss']
})
export class MedicalHistoryComponent implements OnInit {
  routerSub?: Subscription;
  progressIndicatorSub?: Subscription;
  progressIndicatorConfig: IProgressIndicatorConfig = {
    id: ''
  };

  prevHNConfig = {
    id: 'prev_hidden_nav',
    skipLinks: [
      {
        title: 'Skip to main content',
        href: 'ds-cont'
      }
    ]
  };

  medicalForm = new FormGroup({});

  radioConfig1: IRadioInputComponentConfig = {
    id: 'radio_1',
    formGroup: this.medicalForm,
    required: true,
    label: 'Have you had a medical exam performed by an IRCC authorized panel physician (doctor) within the last 12 months?',
    options: [
      {
        text: 'Yes'
      },
      {
        text: 'No'
      }
    ],
    errorMessages: [
      { key: 'required', errorLOV: 'This field is required' }
    ]
  };

  radioConfig2: IRadioInputComponentConfig = {
    id: 'radio_2',
    formGroup: this.medicalForm,
    required: true,
    label: 'Are you currently receiving dialysis treatment?',
    options: [
      {
        text: 'Yes'
      },
      {
        text: 'No'
      }
    ],
    errorMessages: [
      { key: 'required', errorLOV: 'This field is required' }
    ]
  };

  radioConfig3: IRadioInputComponentConfig = {
    id: 'radio_3',
    formGroup: this.medicalForm,
    required: true,
    label: 'Have you had a drug or alcohol addiction causing you to be a threat to yourself or others, or to be hospitalized?',
    options: [
      {
        text: 'Yes'
      },
      {
        text: 'No'
      }
    ],
    errorMessages: [
      { key: 'required', errorLOV: 'This field is required' }
    ]
  };

  radioConfig4: IRadioInputComponentConfig = {
    id: 'radio_4',
    formGroup: this.medicalForm,
    required: true,
    label: 'Have you had a mental health condition causing you to be a threat to yourself or others, or to be hospitalized?',
    options: [
      {
        text: 'Yes'
      },
      {
        text: 'No'
      }
    ],
    errorMessages: [
      { key: 'required', errorLOV: 'This field is required' }
    ]
  };

  radioConfig5: IRadioInputComponentConfig = {
    id: 'radio_5',
    formGroup: this.medicalForm,
    required: true,
    label: 'Have you ever been diagnosed with syphilis?',
    options: [
      {
        text: 'Yes'
      },
      {
        text: 'No'
      }
    ],
    errorMessages: [
      { key: 'required', errorLOV: 'This field is required' }
    ]
  };

  radioConfig6: IRadioInputComponentConfig = {
    id: 'radio_6',
    formGroup: this.medicalForm,
    required: true,
    label: 'Have you been treated for syphilis?',
    options: [
      {
        text: 'Yes'
      },
      {
        text: 'No'
      }
    ],
    errorMessages: [
      { key: 'required', errorLOV: 'This field is required' }
    ]
  };

  radioConfig7: IRadioInputComponentConfig = {
    id: 'radio_7',
    formGroup: this.medicalForm,
    required: true,
    label: 'In the last 2 years, were you diagnosed with tuberculosis?',
    options: [
      {
        text: 'Yes'
      },
      {
        text: 'No'
      }
    ],
    errorMessages: [
      { key: 'required', errorLOV: 'This field is required' }
    ]
  };

  radioConfig8: IRadioInputComponentConfig = {
    id: 'radio_8',
    formGroup: this.medicalForm,
    required: true,
    label: 'In the last 5 years, have you been in close contact with a person with tuberculosis?',
    options: [
      {
        text: 'Yes'
      },
      {
        text: 'No'
      }
    ],
    errorMessages: [
      { key: 'required', errorLOV: 'This field is required' }
    ]
  };

  inputConfig1: IInputComponentConfig = {
    id: 'input_1',
    formGroup: this.medicalForm,
    label: 'If known, please provide your Immigraiton medical examination (IME) or Unique medical identifier (UMI) number. (optional)'
  }

  altPathKey = '';
  altLangURL = '';

  innerWidth = 0;

  constructor(
    private router: Router,
    private formService: SalesforceDemoFormStateService,
    private translate: TranslateService,
    private altLang: LanguageSwitchService
  ) { }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    this.updateProgressBarOrientation();
  }

  ngOnInit() {
    //Set orientation of the progress bar and get initial window width
    this.innerWidth = window.innerWidth;
    this.updateProgressBarOrientation();

    this.altLang.setAltLangLink('MedicalHistory');

    this.formService.updateSelected(0);
    //if the page has moved to this one via a back or forward browser button, this detects the move and updates the page.
    this.routerSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const tempConfig = this.progressIndicatorConfig;
        tempConfig.selected = 0;
        this.formService.updateProgressIndicator(tempConfig);
      }
    });

    this.progressIndicatorSub =
      this.formService.progressIndicatorObs$.subscribe((response) => {
        this.progressIndicatorConfig = response;
      });

      this.medicalForm.addControl(
        this.radioConfig1.id,
        new FormControl('', Validators.required)
      );
      this.medicalForm.addControl(
        this.inputConfig1.id,
        new FormControl('', Validators.required)
      );
      this.medicalForm.addControl(
        this.radioConfig2.id,
        new FormControl('', Validators.required)
      );
      this.medicalForm.addControl(
        this.radioConfig3.id,
        new FormControl('', Validators.required)
      );
      this.medicalForm.addControl(
        this.radioConfig4.id,
        new FormControl('', Validators.required)
      );
      this.medicalForm.addControl(
        this.radioConfig5.id,
        new FormControl('', Validators.required)
      );
      this.medicalForm.addControl(
        this.radioConfig6.id,
        new FormControl('', Validators.required)
      );
      this.medicalForm.addControl(
        this.radioConfig7.id,
        new FormControl('', Validators.required)
      );
      this.medicalForm.addControl(
        this.radioConfig8.id,
        new FormControl('', Validators.required)
      );

      this.medicalForm.valueChanges.subscribe((change)=>{
        console.log(change);
      })
  }

  progressTabButtonEvent(event: Event) {
    this.formService.progressTabButtonEvent(event);
  }

  nextPage() {
    this.formService.navigationHandler('next');
  }

  /**
   * Getter for the previous page button
   */
  previousPage() {
    this.formService.navigationHandler('prev');

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

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
    this.progressIndicatorSub?.unsubscribe();
  }

}
