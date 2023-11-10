import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MedicalHistoryComponent } from './medical-history/medical-history.component';
import { CriminalHistoryComponent } from './criminal-history/criminal-history.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Title.Home' },
  { path: 'medical-history', component: MedicalHistoryComponent, title: 'Medical History' }, //English
  { path: 'histoire-medical', component: MedicalHistoryComponent, title: 'Medical History' }, //French
  { path: 'criminal-history', component: CriminalHistoryComponent, title: 'Criminal history' }, //English
  { path: 'antécédents-criminels', component: CriminalHistoryComponent, title: 'Antécédents Criminels' }, //French
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class SalesforceDemoRoutingModule { }
