import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesforceDemoRoutingModule } from './salesforce-demo-routing.module';
import { SharedModule } from '../@shared';

import {
  IrccDsAngularComponentsSharedModule,
  IrccDsAngularHeaderFooterModule,
  IrccDsAngularNavigationModule
} from 'ircc-ds-angular-component-library';
import { TranslateModule } from '@ngx-translate/core';
import { MedicalHistoryComponent } from './medical-history/medical-history.component';
import { CriminalHistoryComponent } from './criminal-history/criminal-history.component';
import { HomeComponent } from './home/home.component';
import { SalesforceDemoComponent } from './salesforce-demo.component';
import { HttpClientModule } from  '@angular/common/http';
import { apiservice } from './apiservice.service';


@NgModule({
  declarations: [
    SalesforceDemoComponent,
    MedicalHistoryComponent,
    CriminalHistoryComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    SalesforceDemoRoutingModule,
    SharedModule,
    IrccDsAngularHeaderFooterModule,
    IrccDsAngularComponentsSharedModule,
    HttpClientModule,
    IrccDsAngularNavigationModule
  ]
})
export class SalesforceDemoModule { }
