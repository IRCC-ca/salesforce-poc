import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicalHistoryComponent } from './medical-history/medical-history.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Title.Home' },
  { path: 'medical-history', component: MedicalHistoryComponent, title: 'Medical History' }, //English
  { path: 'histoire-medical', component: MedicalHistoryComponent, title: 'Medical History' }, //French
  { path: 'personal-information', component: PersonalInformationComponent, title: 'Title.PersonalInfo' }, //English
  { path: 'informations-personnelles', component: PersonalInformationComponent, title: 'Title.PersonalInfo' }, //French
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SalesforceDemoRoutingModule { }
