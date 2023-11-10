import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  ViewChild,
  PLATFORM_ID
} from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { LanguageSwitchService } from "@app/@shared/language-switch/language-switch.service";
import { TranslateService } from "@ngx-translate/core";
import {
  IProgressIndicatorConfig,
  IIconButtonComponentConfig,
  IRadioInputComponentConfig,
  IInputComponentConfig,
  IBannerConfig,
  INavigationConfig,
  INavigationItemHeading,
  INavigationItemLink,
  NavigationService,
} from "ircc-ds-angular-component-library";
import { Subscription } from "rxjs";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SalesforceDemoFormStateService } from "../salesforce-demo-form-state.service";

import { Apollo, gql } from "apollo-angular";
import { apiservice } from "../apiservice.service";
import { HttpHeaders } from "@angular/common/http";


const CREATE_ACCOUNT = gql`mutation AccountMedical(
  $poc_exam__c: Boolean!
  $poc_ime__c : String!
  $poc_dialysis__c : Boolean!
  $poc_addiction__c : Boolean!
  $poc_hospitalized__c : Boolean!
  $poc_syphilis__c : Boolean!
  $poc_syphilis_treated__c : Boolean!
  $poc_tb_two__c : Boolean!
  $poc_tb_five__c : Boolean!
  ){
  uiapi {
    AccountCreate(input: {
      Account: {
      Name: "Test Five"
      poc_exam__c: $poc_exam__c
      poc_ime__c : $poc_ime__c
      poc_dialysis__c : $ poc_dialysis__c
      poc_addiction__c : $poc_addiction__c
      poc_hospitalized__c : $poc_hospitalized__c
      poc_syphilis__c : $poc_syphilis__c
      poc_syphilis_treated__c : $poc_syphilis_treated__c
      poc_tb_two__c : $poc_tb_two__c
      poc_tb_five__c : $poc_tb_five__c

      }
    }) {
      Record {
        Id
        Name {
            value
        }
        poc_exam__c {
            value
        }
        poc_ime__c {
            value
        }
        poc_dialysis__c {
            value
        } 
        poc_addiction__c {
            value
        }
        poc_hospitalized__c {
            value
        }
        poc_syphilis__c {
            value
        }
        poc_syphilis_treated__c {
            value
        }
        poc_tb_two__c {
            value
        }
        poc_tb_five__c {
            value
        }
      }
    }
  }
}
`
const GET_ACCOUNT = gql `
query accountById($id: ID) {
  uiapi {
    query {
      Account(where: { Id: { eq: $id } }) {
        edges {
          node {
            Id
            Name {
              value
            }
            poc_exam__c {
                value
            }
            poc_ime__c {
                value
            }
            poc_dialysis__c {
                value
            } 
            poc_addiction__c {
                value
            }
            poc_hospitalized__c {
                value
            }
            poc_syphilis__c {
                value
            }
            poc_syphilis_treated__c {
                value
            }
            poc_tb_two__c {
                value
            }
            poc_tb_five__c {
                value
            }
          }
        }
      }
    }
  }
}
`

@Component({
  selector: "app-medical-history",
  templateUrl: "./medical-history.component.html",
  styleUrls: ["./medical-history.component.scss"],
})
export class MedicalHistoryComponent implements OnInit {
  showErrorBanner = false;
  @ViewChild("errorBanner") errorBannerRef?: ElementRef;
  routerSub?: Subscription;
  progressIndicatorSub?: Subscription;
  progressIndicatorConfig: IProgressIndicatorConfig = {
    id: "",
  };

  prevHNConfig = {
    id: "prev_hidden_nav",
    skipLinks: [
      {
        title: "Skip to main content",
        href: "ds-cont",
      },
    ],
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
    indicator: {status:'primary', icon:'fa-regular fa-circle-half-stroke'}
  }

  criminal: INavigationItemLink = {
    id: 'criminalLink',
    label: 'Criminal history',
    type: 'link',
    href: 'en/' + 'personal-information',
    children: [],
    indicator: {status:'neutral', icon:'fa-regular fa-circle'}
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

  errorBannerConfig: IBannerConfig = {
    id: "error_banner",
    type: "critical",
    title: "ACC_DEMO.PERSONAL_INFO.ERROR_BANNER.TITLE",
    content: "ACC_DEMO.PERSONAL_INFO.ERROR_BANNER.CONTENT",
    rounded: true,
  };

  medicalForm = new FormGroup({});

  poc_exam__c_config: IRadioInputComponentConfig = {
    id: "poc_exam__c",
    formGroup: this.medicalForm,
    required: true,
    label:
      "Have you had a medical exam performed by an IRCC authorized panel physician (doctor) within the last 12 months?",
    options: [
      {
        text: "Yes",
      },
      {
        text: "No",
      },
    ],
    errorMessages: [{ key: "required", errorLOV: "This field is required" }],
  };

  poc_dialysis__c_config: IRadioInputComponentConfig = {
    id: "poc_dialysis__c",
    formGroup: this.medicalForm,
    required: true,
    label: "Are you currently receiving dialysis treatment?",
    options: [
      {
        text: "Yes",
      },
      {
        text: "No",
      },
    ],
    errorMessages: [{ key: "required", errorLOV: "This field is required" }],
  };

  poc_addiction__c_config: IRadioInputComponentConfig = {
    id: "poc_addiction__c",
    formGroup: this.medicalForm,
    required: true,
    label:
      "Have you had a drug or alcohol addiction causing you to be a threat to yourself or others, or to be hospitalized?",
    options: [
      {
        text: "Yes",
      },
      {
        text: "No",
      },
    ],
    errorMessages: [{ key: "required", errorLOV: "This field is required" }],
  };

  poc_hospitalized__c_config: IRadioInputComponentConfig = {
    id: "poc_hospitalized__c",
    formGroup: this.medicalForm,
    required: true,
    label:
      "Have you had a mental health condition causing you to be a threat to yourself or others, or to be hospitalized?",
    options: [
      {
        text: "Yes",
      },
      {
        text: "No",
      },
    ],
    errorMessages: [{ key: "required", errorLOV: "This field is required" }],
  };

  poc_syphilis__c_config: IRadioInputComponentConfig = {
    id: "poc_syphilis__c",
    formGroup: this.medicalForm,
    required: true,
    label: "Have you ever been diagnosed with syphilis?",
    options: [
      {
        text: "Yes",
      },
      {
        text: "No",
      },
    ],
    errorMessages: [{ key: "required", errorLOV: "This field is required" }],
  };

  poc_syphilis_treated__c_config: IRadioInputComponentConfig = {
    id: "poc_syphilis_treated__c",
    formGroup: this.medicalForm,
    required: true,
    label: "Have you been treated for syphilis?",
    options: [
      {
        text: "Yes",
      },
      {
        text: "No",
      },
    ],
    errorMessages: [{ key: "required", errorLOV: "This field is required" }],
  };

  poc_tb_two__c_config: IRadioInputComponentConfig = {
    id: "poc_tb_two__c",
    formGroup: this.medicalForm,
    required: true,
    label: "In the last 2 years, were you diagnosed with tuberculosis?",
    options: [
      {
        text: "Yes",
      },
      {
        text: "No",
      },
    ],
    errorMessages: [{ key: "required", errorLOV: "This field is required" }],
  };

  poc_tb_five__c_config: IRadioInputComponentConfig = {
    id: "poc_tb_five__c",
    formGroup: this.medicalForm,
    required: true,
    label:
      "In the last 5 years, have you been in close contact with a person with tuberculosis?",
    options: [
      {
        text: "Yes",
      },
      {
        text: "No",
      },
    ],
    errorMessages: [{ key: "required", errorLOV: "This field is required" }],
  };

  poc_ime__c_config: IInputComponentConfig = {
    id: "poc_ime__c",
    formGroup: this.medicalForm,
    label:
      "If known, please provide your Immigraiton medical examination (IME) or Unique medical identifier (UMI) number. (optional)",
  };

  altPathKey = "";
  altLangURL = "";

  innerWidth = 0;


  constructor(
    private router: Router,
    private formService: SalesforceDemoFormStateService,
    private translate: TranslateService,
    private altLang: LanguageSwitchService,
    @Inject(PLATFORM_ID) private platformId: object,
    private apiservice: apiservice,
    private apollo: Apollo,
    private navService: NavigationService
  ) {}

  @HostListener("window:resize", ["$event"])
  onResize() {
    this.innerWidth = window.innerWidth;
    this.updateProgressBarOrientation();
  }

  ngOnInit() {
    this.navService.setNavConfig(this.rightNavConfig);

    //Set orientation of the progress bar and get initial window width
    this.innerWidth = window.innerWidth;
    this.updateProgressBarOrientation();

    this.altLang.setAltLangLink("MedicalHistory");

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
      this.poc_exam__c_config.id,
      new FormControl("", Validators.required)
    );
    this.medicalForm.addControl(this.poc_ime__c_config.id, new FormControl(""));
    this.medicalForm.addControl(
      this.poc_dialysis__c_config.id,
      new FormControl("", Validators.required)
    );
    this.medicalForm.addControl(
      this.poc_addiction__c_config.id,
      new FormControl("", Validators.required)
    );
    this.medicalForm.addControl(
      this.poc_hospitalized__c_config.id,
      new FormControl("", Validators.required)
    );
    this.medicalForm.addControl(
      this.poc_syphilis__c_config.id,
      new FormControl("", Validators.required)
    );
    this.medicalForm.addControl(
      this.poc_syphilis_treated__c_config.id,
      new FormControl("", Validators.required)
    );
    this.medicalForm.addControl(
      this.poc_tb_two__c_config.id,
      new FormControl("", Validators.required)
    );
    this.medicalForm.addControl(
      this.poc_tb_five__c_config.id,
      new FormControl("", Validators.required)
    );

    this.medicalForm.valueChanges.subscribe((change) => {
      console.log(change);
    });

    let id = localStorage.getItem('medical_id');
    if (id) {
      this.apollo.watchQuery({
        query: GET_ACCOUNT,
        variables: {
          id: id
        },
        context: {
          headers: new HttpHeaders().set(
            "Authorization",
            "Bearer " + localStorage.getItem("access_token")
          ),
        }
      }).valueChanges.subscribe(
        (data: any) => {
          console.log('got data =>', data);

          let formData = data.data.uiapi.query.Account.edges[0].node;
          this.medicalForm.get(this.poc_exam__c_config.id)?.setValue(this.convertBoolToStr(formData.poc_exam__c.value));
          this.medicalForm.get(this.poc_ime__c_config.id)?.setValue(formData.poc_ime__c.value);
          this.medicalForm.get(this.poc_dialysis__c_config.id)?.setValue(this.convertBoolToStr(formData.poc_dialysis__c.value));
          this.medicalForm.get(this.poc_addiction__c_config.id)?.setValue(this.convertBoolToStr(formData.poc_addiction__c.value));
          this.medicalForm.get(this.poc_hospitalized__c_config.id)?.setValue(this.convertBoolToStr(formData.poc_hospitalized__c.value));
          this.medicalForm.get(this.poc_syphilis__c_config.id)?.setValue(this.convertBoolToStr(formData.poc_syphilis__c.value));
          this.medicalForm.get(this.poc_syphilis_treated__c_config.id)?.setValue(this.convertBoolToStr(formData.poc_syphilis_treated__c.value));
          this.medicalForm.get(this.poc_tb_two__c_config.id)?.setValue(this.convertBoolToStr(formData.poc_tb_two__c.value));
          this.medicalForm.get(this.poc_tb_five__c_config.id)?.setValue(this.convertBoolToStr(formData.poc_tb_five__c.value));
        }
      )
    }
  }

  convertBoolToStr(value: string | boolean){
    return value === true ? "Yes" : "No";
  }

  /**
   * Update the progress indicator status (unlock/lock the next element)
   */
  updateProgressIndicator() {
    if (
      this.progressIndicatorConfig.steps &&
      (this.progressIndicatorConfig.steps[2].tagConfig.type === "locked" ||
        this.progressIndicatorConfig.steps[2].tagConfig.type === "notStarted")
    ) {
      const tempConfig = this.progressIndicatorConfig;
      if (tempConfig.steps) {
        if (this.medicalForm.valid) {
          tempConfig.steps[2].tagConfig.type = "notStarted";
          this.formService.updateProgressIndicator(tempConfig);
        } else {
          tempConfig.steps[2].tagConfig.type = "locked";
          this.formService.updateProgressIndicator(tempConfig);
        }
      }
    }
  }

  convertStrToBool(value: string | boolean){
    return value === 'Yes' ? true : false;
  }

  /**
   * Once triggered, this tracks if the form is valid and updates the showErrorBanner variable accordingly
   */
  navButton() {
    this.medicalForm.markAllAsTouched();
    this.updateProgressIndicator();
    console.log(this.medicalForm);
      if (!this.medicalForm.valid) {
        this.showErrorBanner = true;
        this.medicalForm.valueChanges.subscribe(() => {
          this.showErrorBanner = !this.medicalForm.valid;
          this.updateProgressIndicator();
        });
  
        setTimeout(() => {
          this.errorBannerRef?.nativeElement.scrollIntoView({
            behavior: "smooth",
          });
        });
      } else {
          this.apollo
          .mutate({
            mutation: CREATE_ACCOUNT,
            variables: {
              poc_exam__c: this.convertStrToBool(this.medicalForm.get(this.poc_exam__c_config.id)?.value),
              poc_ime__c : this.medicalForm.get(this.poc_ime__c_config.id)?.value,
              poc_dialysis__c : this.convertStrToBool(this.medicalForm.get(this.poc_dialysis__c_config.id)?.value),
              poc_addiction__c : this.convertStrToBool(this.medicalForm.get(this.poc_addiction__c_config.id)?.value),
              poc_hospitalized__c : this.convertStrToBool(this.medicalForm.get(this.poc_hospitalized__c_config.id)?.value),
              poc_syphilis__c : this.convertStrToBool(this.medicalForm.get(this.poc_syphilis__c_config.id)?.value),
              poc_syphilis_treated__c : this.convertStrToBool(this.medicalForm.get(this.poc_syphilis_treated__c_config.id)?.value),
              poc_tb_two__c : this.convertStrToBool(this.medicalForm.get(this.poc_tb_two__c_config.id)?.value),
              poc_tb_five__c : this.convertStrToBool(this.medicalForm.get(this.poc_tb_five__c_config.id)?.value)
            },
            context: {
              headers: new HttpHeaders().set(
                "Authorization",
                "Bearer " + localStorage.getItem("access_token")
              ),
            },
          }).subscribe(
            (data: any)  => {
              console.log('got data - from subscribe: ', data);
              if (data) {
                localStorage.setItem('medical_id', data.data.uiapi.AccountCreate.Record.Id)
              }
            },
            error => {
              console.log('there was an error sending the query', error);
            },
          );
        this.nextPage();
        const tempConfig = this.progressIndicatorConfig;
        if (tempConfig.steps) {
          tempConfig.steps[1].tagConfig.type = "success";
          tempConfig.steps[2].tagConfig.type = "primary";
        }
        this.formService.updateProgressIndicator(tempConfig);
 
      } //NOTE: No need to deal with cases not covered above, since those will result in navigation!
  
  }

  progressTabButtonEvent(event: Event) {
    this.formService.progressTabButtonEvent(event);
  }

  nextPage() {
    this.formService.navigationHandler("next");
  }

  /**
   * Getter for the previous page button
   */
  previousPage() {
    this.formService.navigationHandler("prev");
    localStorage.clear();
  }

  /**
   * Update the orientation of the progress bar
   */
  updateProgressBarOrientation() {
    if (
      this.innerWidth < 980 &&
      (this.progressIndicatorConfig.orientation === "horizontal" ||
        this.progressIndicatorConfig.orientation === undefined)
    ) {
      this.formService.updateOrientation("vertical");
    } else if (
      this.innerWidth > 980 &&
      (this.progressIndicatorConfig.orientation === "vertical" ||
        this.progressIndicatorConfig.orientation === undefined)
    ) {
      this.formService.updateOrientation("horizontal");
    }
  }

  ngOnDestroy() {
    this.routerSub?.unsubscribe();
    this.progressIndicatorSub?.unsubscribe();
  }
}
