import { Component, OnInit } from "@angular/core";
import {
  IButtonConfig,
  IInputComponentConfig,
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

  form = new FormGroup({});
  inputUserName: IInputComponentConfig = {
    id: "inputUserName",
    formGroup: this.form,
    label: "User Name",
    errorMessages: [{ key: "required", errorLOV: "Please enter a value" }],
  };
  inputPassword: IInputComponentConfig = {
    id: "inputPassword",
    formGroup: this.form,
    label: "Password",
    type: "password",
    errorMessages: [{ key: "required", errorLOV: "Please enter a value" }],
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
  }

  submitForm() {
    this.form.markAllAsTouched();

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
            this.nextPage();
          }
        });
    }
  }

  nextPage() {
    this.formService.navigationHandler("next");
  }
}
