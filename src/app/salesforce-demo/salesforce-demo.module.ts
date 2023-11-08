import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesforceDemoRoutingModule } from './salesforce-demo-routing.module';
import { SharedModule } from '../@shared';

import {
  IrccDsAngularComponentsSharedModule,
  IrccDsAngularHeaderFooterModule
} from 'ircc-ds-angular-component-library';
import { TranslateModule } from '@ngx-translate/core';
import { MedicalHistoryComponent } from './medical-history/medical-history.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { HomeComponent } from './home/home.component';
import { SalesforceDemoComponent } from './salesforce-demo.component';

@NgModule({
  declarations: [
    SalesforceDemoComponent,
    MedicalHistoryComponent,
    PersonalInformationComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    SalesforceDemoRoutingModule,
    SharedModule,
    IrccDsAngularHeaderFooterModule,
    IrccDsAngularComponentsSharedModule
  ]
})
export class SalesforceDemoModule { }
