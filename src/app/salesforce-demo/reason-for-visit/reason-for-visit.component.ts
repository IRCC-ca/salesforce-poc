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
  ISelectConfig,
  ITextareaComponentConfig,
  IDatePickerConfig,
} from "ircc-ds-angular-component-library";
import { Subscription } from "rxjs";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SalesforceDemoFormStateService } from "../salesforce-demo-form-state.service";

import { Apollo, gql } from "apollo-angular";
import { apiservice } from "../apiservice.service";
import { HttpHeaders } from "@angular/common/http";

const CREATE_ACCOUNT = gql`mutation AccountReason(
  $enter_date__c: Date!
  $leave_date__c : Date!
  $uci__c : String!
  $what_youll_do_in_canada__c : String!
  ){
  uiapi {
    AccountCreate(input: {
      reason_for_visit__c: {
      Name: "Bobby Test"
      enter_date__c: $enter_date__c
      leave_date__c : $leave_date__c
      uci__c : $ uci__c
      what_youll_do_in_canada__c : $what_youll_do_in_canada__c
      }
    }) {
      Record {
        Id
        Name {
            value
        }
        enter_date__c {
            value
        }
        leave_date__c {
            value
        }
        uci__c {
            value
        } 
        what_youll_do_in_canada__c {
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
      reason_for_visit__c(where: { Id: { eq: $id } }) {
        edges {
          node {
            Id
            Name {
              value
            }
            enter_date__c {
                value
            }
            leave_date__c {
                value
            }
            uci__c {
                value
            } 
            what_youll_do_in_canada__c {
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
  selector: 'app-reason-for-visit',
  templateUrl: './reason-for-visit.component.html',
  styleUrls: ['./reason-for-visit.component.scss']
})
export class ReasonForVisitComponent implements OnInit {

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
    href: 'en/' + 'reason-for-visit',
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

  reasonForVisitForm = new FormGroup({});

  apply_multi_person_config: IRadioInputComponentConfig = {
  id: "apply_multiple_person",
  formGroup: this.reasonForVisitForm,
  required: true,
  label:
    "Do you want to apply for more than 1 person at the same time?",
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

  error_apply_group_config: IBannerConfig = {
    id: 'error_apply_group',
    title:"You can't use this application to apply as a group",
    content: 'Find out how you can <a href="">apply for a visitor visa.</a>',
    type: 'critical',
    rounded: false,
    dismissible: false,
    size: 'small'
  };

  apply_on_behalf_config: IRadioInputComponentConfig = {
    id: "apply_on_behalf",
    formGroup: this.reasonForVisitForm,
    required: true,
    label:
      "Are you applying on behalf of someone else?",
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

  error_apply_on_behalf_config: IBannerConfig = {
    id: 'error_apply_group',
    title:"You can't use this application to apply with a representative",
    content: "You must use the <a href=''>Authorized Paid Representatives Portal</a> to apply. If you're not an authorized paid representative, find out how you can <a href=''>apply for a visitor visa.</a>",
    type: 'critical',
    rounded: false,
    dismissible: false,
    size: 'small'
  };

  want_apply_for_config: ISelectConfig = {
    id: 'want_apply_select',
    formGroup: this.reasonForVisitForm,
    label: 'I want to apply for a ',
    required: true,
    placeholder: 'Select a purpose for your application',
    options: [
      {
        text: 'Visitor visa or super visa',
        value: 'visitor'
      },
      {
        text: 'Transit visa',
        value: 'transit'
      },
      {
        text: 'Temporary special measures',
        value: 'special'
      },
      {
        text: 'Not sure',
        value: 'unsure'
      }
    ],
    errorMessages: [
      {
        key: 'required',
        errorLOV: 'ERROR.requiredRadioError'
      }
    ]
  };

  error_want_apply_transit_config: IBannerConfig = {
  id: 'error_apply_visitor',
  title:"You can't use this application to apply for a transit visa",
  content: "Find out how you can <a href=''>apply for a transit visa.</a>",
  type: 'critical',
  rounded: false,
  dismissible: false,
  size: 'small'
};

  error_want_apply_temp_special_config: IBannerConfig = {
    id: 'error_apply_visitor',
    title:"You can't use this application to apply for a visitor visa for the option you selected",
    content: "Find out how you can <a href=''>apply for a visitor visa.</a>",
    type: 'critical',
    rounded: false,
    dismissible: false,
    size: 'small'
  };


  error_apply_unsure_config: IBannerConfig = {
    id: 'error_apply_visitor',
    title:"You can't use this application if you're not sure of your purpose in applying.",
    content: "Find out how you can <a href=''>apply for a transit visa.</a>",
    type: 'critical',
    rounded: false,
    dismissible: false,
    size: 'small'
  };

  why_do_you_need_visa_config: ISelectConfig = {
    id: 'why_need_visa_select',
    formGroup: this.reasonForVisitForm,
    label: 'Why do you need a visa ',
    required: true,
    placeholder: 'Select a reason',
    options: [
      {
        text: 'Option 1',
        value: '1'
      },
      {
        text: 'Option 2',
        value: '2'
      },
      {
        text: 'Option 3',
        value: '3'
      },
      {
        text: 'Option 4',
        value: '4'
      }
    ],
    errorMessages: [
      {
        key: 'required',
        errorLOV: 'ERROR.requiredRadioError'
      }
    ]
  };
  
  what_youll_do_in_canada__c_config: ITextareaComponentConfig = {
    formGroup: this.reasonForVisitForm,
    id: 'what_youll_do_in_canada__c',
    label: "Tell us more about what you'll do in Canada",
    desc: 'Include dates and places you plan to visit.',
    required: true,
    charLimit: '475',
    resizable: 'vertical',
    size: 'large',
    errorMessages: [
      {
        key: 'required',
        errorLOV: 'This field is required'
      },
      {
        key: 'maxLength',
        errorLOV: 'Maximum number of characters reached'
      }
    ]
   
  };

  enter_date__c_config: IDatePickerConfig = {
    id: "enter_date__c",
    formGroup: this.reasonForVisitForm,
    label: 'When will you enter Canada?',
    required: true,
    errorMessages: [
      {
        key: 'required',
        errorLOV: 'This field is required'
      }
    ],
  };

  leave_date__c_config: IDatePickerConfig = {
    id: "enter_date__c",
    formGroup: this.reasonForVisitForm,
    label: 'When will you leave Canada?',
    required: true,
    errorMessages: [
      {
        key: 'required',
        errorLOV: 'This field is required'
      }
    ],
  };
  
  uci__c_config: IInputComponentConfig = {
    id: "uci__c",
    formGroup: this.reasonForVisitForm,
    label: "UCI (unique client identifier), if known (optional)"    
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

    this.altLang.setAltLangLink("ReasonForVisit");

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

      this.reasonForVisitForm.addControl(
      this.apply_multi_person_config.id,
      new FormControl("", Validators.required)
    ); 

    this.reasonForVisitForm.addControl(
      this.apply_on_behalf_config.id,
      new FormControl("", Validators.required)
    );
    
    this.reasonForVisitForm.addControl(
      this.want_apply_for_config.id,
      new FormControl("", Validators.required)
    ); 

    this.reasonForVisitForm.addControl(
      this.why_do_you_need_visa_config.id,
      new FormControl("", Validators.required)
    );
    
    this.reasonForVisitForm.addControl(
      this.what_youll_do_in_canada__c_config.id,
      new FormControl("", Validators.required)
    ); 

    this.reasonForVisitForm.addControl(
      this.enter_date__c_config.id + '_dayControl',
      new FormControl("", Validators.required)
    );

    this.reasonForVisitForm.addControl(
      this.enter_date__c_config.id + '_monthControl',
      new FormControl("", Validators.required)
    );

    this.reasonForVisitForm.addControl(
      this.enter_date__c_config.id + '_yearControl',
      new FormControl("", Validators.required)
    );

    this.reasonForVisitForm.addControl(
      this.leave_date__c_config.id + '_dayControl',
      new FormControl("", Validators.required)
    );

    this.reasonForVisitForm.addControl(
      this.leave_date__c_config.id + '_monthControl',
      new FormControl("", Validators.required)
    );

    this.reasonForVisitForm.addControl(
      this.leave_date__c_config.id + '_yearControl',
      new FormControl("", Validators.required)
    );
    
    this.reasonForVisitForm.addControl(
      this.uci__c_config.id,
      new FormControl("")
    );

    this.reasonForVisitForm.valueChanges.subscribe((change) => {
      console.log(change);
    });

    let id = localStorage.getItem('reason_for_visit_id');
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

          // let formData = data.data.uiapi.query.reason_for_visit__c.edges[0].node;
          // this.reasonForVisitForm.get(this.enter_date__c_config.id)?.setValue(formData.enter_date__c.value);
          // this.reasonForVisitForm.get(this.leave_date__c_config.id)?.setValue(formData.leave_date__c.value);
          // this.reasonForVisitForm.get(this.uci__c_config.id)?.setValue(formData.uci__c.value);
          // this.reasonForVisitForm.get(this.what_youll_do_in_canada__c_config.id)?.setValue(formData.what_youll_do_in_canada__c.value);
        }
      )
    }
  }

  convertBoolToStr(value: string | boolean){
    return value === true ? "Yes" : "No";
  }

  convertStrToBool(value: string | boolean){
    return value === 'Yes' ? true : false;
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
        if (this.reasonForVisitForm.valid) {
          tempConfig.steps[2].tagConfig.type = "notStarted";
          this.formService.updateProgressIndicator(tempConfig);
        } else {
          tempConfig.steps[2].tagConfig.type = "locked";
          this.formService.updateProgressIndicator(tempConfig);
        }
      }
    }
  }

  /**
   * Once triggered, this tracks if the form is valid and updates the showErrorBanner variable accordingly
   */
  navButton() {
    this.reasonForVisitForm.markAllAsTouched();
    this.updateProgressIndicator();
    console.log(this.reasonForVisitForm);
      if (!this.reasonForVisitForm.valid) {
        this.showErrorBanner = true;
        this.reasonForVisitForm.valueChanges.subscribe(() => {
          this.showErrorBanner = !this.reasonForVisitForm.valid;
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
              enter_date__c: this.reasonForVisitForm.get(this.enter_date__c_config.id)?.value,
              leave_date__c : this.reasonForVisitForm.get(this.leave_date__c_config.id)?.value,
              uci__c : this.reasonForVisitForm.get(this.uci__c_config.id)?.value,
              what_youll_do_in_canada__c : this.reasonForVisitForm.get(this.what_youll_do_in_canada__c_config.id)?.value,
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
                localStorage.setItem('reason_for_visit_id', data.data.uiapi.AccountCreate.Record.Id)
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
