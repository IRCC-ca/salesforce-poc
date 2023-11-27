import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicalHistoryComponent } from './medical-history/medical-history.component';
import { CriminalHistoryComponent } from './criminal-history/criminal-history.component';
import { HomeComponent } from './home/home.component';
import { ReasonForVisitComponent } from './reason-for-visit/reason-for-visit.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Title.Home' },
  { path: 'reason-for-visit', component: ReasonForVisitComponent, title: 'Reason For Visit' }, //English
  { path: 'raison-de-visite', component: ReasonForVisitComponent, title: 'Raison de Visite' }, //French
  { path: 'medical-history', component: MedicalHistoryComponent, title: 'Medical History' }, //English
  { path: 'histoire-medical', component: MedicalHistoryComponent, title: 'Medical History' }, //French
  { path: 'criminal-history', component: CriminalHistoryComponent, title: 'Criminal History' }, //English
  { path: 'antécédents-criminels', component: CriminalHistoryComponent, title: 'Antécédents Criminels' }, //French
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SalesforceDemoRoutingModule { }
