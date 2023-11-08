import { Component, OnInit } from "@angular/core";
import { IButtonConfig } from "ircc-ds-angular-component-library";
import { Router } from "@angular/router";
import { LanguageSwitchService } from "@app/@shared/language-switch/language-switch.service";
import { TranslateService } from "@ngx-translate/core";
import { SalesforceDemoFormStateService } from "../salesforce-demo-form-state.service";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, of, tap } from "rxjs";

import { apiservice } from "../apiservice.service";
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

  constructor(
    private router: Router,
    private translate: TranslateService,
    private altLang: LanguageSwitchService,
    private formService: SalesforceDemoFormStateService,
    private apiservice: apiservice
  ) {}

  ngOnInit() {
    this.altLang.setAltLangLink("Home");

    this.apiservice.postAuth().subscribe((posts) => {
      console.log(posts);
    });
  }

  nextPage() {
    this.formService.navigationHandler("next");
  }
}
