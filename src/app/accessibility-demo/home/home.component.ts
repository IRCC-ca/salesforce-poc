import { Component, OnInit } from '@angular/core';
import { IButtonConfig } from 'ircc-ds-angular-component-library';
import { Router } from '@angular/router';
import { LanguageSwitchService } from '@app/@shared/language-switch/language-switch.service';
import { TranslateService } from '@ngx-translate/core';
import { AccessbilityDemoFormStateService } from '../accessbility-demo-form-state.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  continueButtonConfig: IButtonConfig = {
    id: 'continue-btn',
    size: 'large',
  };

  constructor(private router: Router,
    private translate: TranslateService,
    private altLang: LanguageSwitchService,
    private formService: AccessbilityDemoFormStateService) { }

  ngOnInit() {
    this.altLang.setAltLangLink('Home');
  }

  nextPage() {
    this.formService.navigationHandler('next');

  }
}
