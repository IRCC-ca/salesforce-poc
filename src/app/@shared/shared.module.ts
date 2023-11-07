import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { LoaderComponent } from './loader/loader.component';
import { IrccDsAngularComponentsSharedModule, IrccDsAngularFormComponentsModule, IrccDsAngularHeaderFooterModule, IrccDsAngularBannerModule } from 'ircc-ds-angular-component-library';
import { InputErrorComponent } from './input-error/input-error.component'


@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    IrccDsAngularComponentsSharedModule,
    IrccDsAngularFormComponentsModule,
    IrccDsAngularHeaderFooterModule,
    IrccDsAngularBannerModule
  ],
  declarations: [
    LoaderComponent,
    InputErrorComponent,
  ],
  exports: [
    LoaderComponent,
    IrccDsAngularComponentsSharedModule,
    IrccDsAngularFormComponentsModule,
    IrccDsAngularHeaderFooterModule,
    IrccDsAngularBannerModule,
    TranslateModule
  ]
})
export class SharedModule { }
