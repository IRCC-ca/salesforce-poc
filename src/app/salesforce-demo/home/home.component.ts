import { Component, OnInit } from "@angular/core";
import {
  IBannerConfig,
  IButtonConfig,
  IInputComponentConfig
} from "ircc-ds-angular-component-library";
import { Router } from "@angular/router";
import { LanguageSwitchService } from "@app/@shared/language-switch/language-switch.service";
import { TranslateService } from "@ngx-translate/core";
import { SalesforceDemoFormStateService } from "../salesforce-demo-form-state.service";

import { Apollo, gql } from "apollo-angular";
import { apiservice } from "../apiservice.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  continueButtonConfig: IButtonConfig = {
    id: "continue-btn",
    size: "large",
  };
  
  isLoading = true;
  form = new FormGroup({});
  inputUserName: IInputComponentConfig = {
    id: "inputUserName",
    formGroup: this.form,
    label: "User Name",
    errorMessages: [
      { key: "required", errorLOV: "Please enter a value" },
      { key: "invalid", errorLOV: "Invalid username or password" }
    ],
  };
  inputPassword: IInputComponentConfig = {
    id: "inputPassword",
    formGroup: this.form,
    label: "Password",
    type: "password",
    errorMessages: [
      { key: "required", errorLOV: "Please enter a value" },
      { key: "invalid", errorLOV: "Invalid username or password" }
    ],
  };

  errorBannerConfig: IBannerConfig = {
    id: "error_banner",
    type: "critical",
    title: "ACC_DEMO.PERSONAL_INFO.ERROR_BANNER.TITLE",
    content: "ACC_DEMO.PERSONAL_INFO.ERROR_BANNER.CONTENT",
    rounded: true,
  };

  constructor(
    private router: Router,
    private translate: TranslateService,
    private altLang: LanguageSwitchService,
    private formService: SalesforceDemoFormStateService,
    private apiservice: apiservice,
    private apollo: Apollo
  ) {}

  ngOnInit() {
    this.altLang.setAltLangLink("Home");

    this.form.addControl(
      this.inputUserName.id,
      new FormControl("", Validators.required)
    );
    this.form.addControl(
      this.inputPassword.id,
      new FormControl("", Validators.required)
    );

    this.form.valueChanges.subscribe(() => {
      this.form.get(this.inputUserName.id)?.setErrors(null);
      this.form.get(this.inputPassword.id)?.setErrors(null);
    });
  }

  submitForm() {
    this.form.markAllAsTouched();
    this.isLoading = true;
    if (this.form.valid) {
      this.apiservice
        .postAuth(
          this.form.get(this.inputUserName.id)?.value,
          this.form.get(this.inputPassword.id)?.value
        )
        .subscribe((data) => {
          console.log(data);
          if (data.access_token) {
            localStorage.setItem("access_token", data.access_token);
            localStorage.removeItem('medical_id');
            setTimeout(() => {
              this.isLoading = false;
            }, 3000);
          }
        }, error => {
          console.log("ERROR => ", error);
          setTimeout(() => {
            this.isLoading = false;
          }, 3000);
          this.form.get(this.inputUserName.id)?.setErrors({invalid: true});
          this.form.get(this.inputPassword.id)?.setErrors({invalid: true});
          
        }, () => { // onComplete callback
          this.nextPage();
        }
        );
    } 
  }

  nextPage() {
    this.formService.navigationHandler("next");
  }
}
