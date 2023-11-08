import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
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
} from "ircc-ds-angular-component-library";
import { Subscription } from "rxjs";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { SalesforceDemoFormStateService } from "../salesforce-demo-form-state.service";

import { Apollo, gql } from "apollo-angular";
import { apiservice } from "../apiservice.service";
import { HttpHeaders } from "@angular/common/http";

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

  errorBannerConfig: IBannerConfig = {
    id: "error_banner",
    type: "critical",
    title: "ACC_DEMO.PERSONAL_INFO.ERROR_BANNER.TITLE",
    content: "ACC_DEMO.PERSONAL_INFO.ERROR_BANNER.CONTENT",
    rounded: true,
  };

  medicalForm = new FormGroup({});

  radioConfig1: IRadioInputComponentConfig = {
    id: "radio_1",
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

  radioConfig2: IRadioInputComponentConfig = {
    id: "radio_2",
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

  radioConfig3: IRadioInputComponentConfig = {
    id: "radio_3",
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

  radioConfig4: IRadioInputComponentConfig = {
    id: "radio_4",
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

  radioConfig5: IRadioInputComponentConfig = {
    id: "radio_5",
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

  radioConfig6: IRadioInputComponentConfig = {
    id: "radio_6",
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

  radioConfig7: IRadioInputComponentConfig = {
    id: "radio_7",
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

  radioConfig8: IRadioInputComponentConfig = {
    id: "radio_8",
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

  inputConfig1: IInputComponentConfig = {
    id: "input_1",
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
    private apiservice: apiservice,
    private apollo: Apollo
  ) {}

  @HostListener("window:resize", ["$event"])
  onResize() {
    this.innerWidth = window.innerWidth;
    this.updateProgressBarOrientation();
  }

  ngOnInit() {
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
      this.radioConfig1.id,
      new FormControl("", Validators.required)
    );
    this.medicalForm.addControl(this.inputConfig1.id, new FormControl(""));
    this.medicalForm.addControl(
      this.radioConfig2.id,
      new FormControl("", Validators.required)
    );
    this.medicalForm.addControl(
      this.radioConfig3.id,
      new FormControl("", Validators.required)
    );
    this.medicalForm.addControl(
      this.radioConfig4.id,
      new FormControl("", Validators.required)
    );
    this.medicalForm.addControl(
      this.radioConfig5.id,
      new FormControl("", Validators.required)
    );
    this.medicalForm.addControl(
      this.radioConfig6.id,
      new FormControl("", Validators.required)
    );
    this.medicalForm.addControl(
      this.radioConfig7.id,
      new FormControl("", Validators.required)
    );
    this.medicalForm.addControl(
      this.radioConfig8.id,
      new FormControl("", Validators.required)
    );

    this.medicalForm.valueChanges.subscribe((change) => {
      console.log(change);
    });
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

  /**
   * Once triggered, this tracks if the form is valid and updates the showErrorBanner variable accordingly
   */
  navButton() {
    this.medicalForm.markAllAsTouched();
    this.updateProgressIndicator();
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
      const tempConfig = this.progressIndicatorConfig;
      if (tempConfig.steps) {
        tempConfig.steps[1].tagConfig.type = "success";
        tempConfig.steps[2].tagConfig.type = "primary";
      }
      this.formService.updateProgressIndicator(tempConfig);
      this.nextPage();
    } //NOTE: No need to deal with cases not covered above, since those will result in navigation!

    this.apollo
      .watchQuery({
        query: gql`
          query accounts {
            uiapi {
              query {
                Account {
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
        `,
        context: {
          headers: new HttpHeaders().set(
            "Authorization",
            "Bearer " + localStorage.getItem("access_token")
          ),
        },
      })
      .valueChanges.subscribe((result: any) => {
        console.log(result);
      });
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
