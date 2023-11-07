import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { finalize } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { AuthenticationService } from './authentication.service';
import { TranslateService } from '@ngx-translate/core';
import { IBannerConfig, IInputComponentConfig, InputTypes } from 'ircc-ds-angular-component-library';
import { LanguageSwitchService } from '@app/@shared/language-switch/language-switch.service';

export const EMAIL_REGEX =
  /^([A-Za-z0-9\.\-_]+@{1}([A-Za-z0-9]+([\-\.]{0,1}[A-Za-z0-9]+)*)\.{1}[A-Za-z0-9]{2,6})$/;

const log = new Logger('Login');

//TODO: This will be replaced in an updated version of the CL package
export interface IErrorPairs {
  key: string;
  errorLOV: string;
}

@UntilDestroy()
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  version: string | null = environment.version;
  error = false;
  isLoading = false;
  maxAuthorizedAttempts: number = 5;
  signInAttempts: number = 0;
  showMaxAttemptBanner: boolean = false;

  invalidUserBannerConfig: IBannerConfig = {
    id: 'invalidUserBanner',
    type: 'critical',
    rounded: true,
    content: "<div>{{'LoginPage.invalidBanner' | translate}}<div>"

  }

  formConfig: IInputComponentConfig[] = [{
    label: 'LoginPage.username',
    type: InputTypes.text,
    id: 'email',
    formGroup: this.loginForm,
    // size: small TODO: These must be small once library is updated
    // errorMessages: [
    //  {
    //    key: 'required',
    //    errorLOV: 'ERRORS.required'
    //  }
    // ]
  },
  {
    label: 'LoginPage.password',
    type: InputTypes.password,
    id: 'password',
    formGroup: this.loginForm,
    // size: small TODO: These must be small once library is updated
    // size: small TODO: These must be small once library is updated
    // errorMessages: [
    //  {
    //    key: 'required',
    //    errorLOV: 'ERRORS.required'
    //  }
    // ]
  },
  ];


  constructor(private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private translate: TranslateService,
    private altLang: LanguageSwitchService) {
  }

  /**
   * Login occurs when the form is submitted
   */
  ngOnInit() {
    this.altLang.setAltLangLink('Login-alt');
    this.formConfig.forEach((config, index) => {
      this.loginForm.addControl(config.id, new FormControl('', Validators.required));
      if (index === 0) {
        this.loginForm.get(config.id)?.addValidators(Validators.pattern(EMAIL_REGEX));
      };
    });

    this.loginForm.valueChanges.subscribe(value => {
      console.log(this.loginForm.get(this.formConfig[1].id)?.errors, this.loginForm.valid);
    })
  }

  async login() {
    if (this.loginForm.valid) {
      try {
        const user = await this.authenticationService.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value);
        if (user.signInUserSession) {
          localStorage.setItem(
            'login_token', JSON.stringify(user.signInUserSession)
          );
          this.signInAttempts = 0;
          //Redirect user to home page:
          let lang = this.router.url.includes('/fr') ? 'fr' : 'en';
          this.router.navigateByUrl(('/' + lang + this.translate.instant('ROUTES.home')));
        }
      } catch (error) {
        console.log(this.error)//TODO: Handle this with a banner, too
        this.signInAttempts++; //TODO: This must be implemented on the backend, not on the front!
        if (this.signInAttempts === this.maxAuthorizedAttempts) { //TODO: More work to be done to incorporate locked state
          this.showMaxAttemptBanner = true;
        }
        this.loginForm.markAllAsTouched();
        this.error = true;
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
