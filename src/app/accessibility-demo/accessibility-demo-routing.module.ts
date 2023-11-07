import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BackgroundInfoComponent } from './background-info/background-info.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Title.Home' },
  { path: 'background-information', component: BackgroundInfoComponent, title: 'Title.BackgroundInfo' }, //English
  { path: 'informations-preliminaires', component: BackgroundInfoComponent, title: 'Title.BackgroundInfo' }, //French
  { path: 'personal-information', component: PersonalInformationComponent, title: 'Title.PersonalInfo' }, //English
  { path: 'informations-personnelles', component: PersonalInformationComponent, title: 'Title.PersonalInfo' }, //French
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AccessibilityDemoRoutingModule { }
