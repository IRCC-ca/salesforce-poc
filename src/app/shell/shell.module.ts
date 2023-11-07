import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

import { I18nModule } from '@app/i18n';
import { ShellComponent } from './shell.component';
import { SharedModule } from '@app/@shared';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    I18nModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    ShellComponent
  ]
})
export class ShellModule {
}
