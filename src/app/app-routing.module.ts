import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RootCollegeComponent} from './college/components/college/root-college/root-college.component';

import {RootEducationalOfferComponent} from './educational-offer/components/educationa-offer/root-educational-offer/root-educational-offer.component';
import {GetPromotionsComponent} from './promotion/components/promotion/get-promotions/get-promotions.component';
import {SearchProfessorsComponent} from './professor/components/professor/search-professors/search-professors.component';
import {SearchStudentComponent} from './student/components/search-student/search-student.component';


const routes: Routes = [
  {path: '', redirectTo: 'collegeView', pathMatch: 'full'},
  {path: 'collegeView', component: RootCollegeComponent},
  {path: 'educationalOfferView', component: RootEducationalOfferComponent},
  {path: 'promotionView', component: GetPromotionsComponent},
  {path: 'professorView', component: SearchProfessorsComponent},
  {path: 'studentView', component: SearchStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
