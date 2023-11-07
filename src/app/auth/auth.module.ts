import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { I18nModule } from '@app/i18n';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login.component';
import { SharedModule } from '@app/@shared';

@NgModule({
  imports: [
    CommonModule,
    SharedModule, 
    ReactiveFormsModule,
    TranslateModule,
    I18nModule,
    AuthRoutingModule
  ],
  declarations: [
    LoginComponent,
  ]
})
export class AuthModule { }
