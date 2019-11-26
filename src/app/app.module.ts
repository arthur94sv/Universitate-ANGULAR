import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {CollegeModule} from './college/college.module';
import {AddCollegeComponent} from './college/components/college/add-college/add-college.component';
import {UpdateCollegeComponent} from './college/components/college/update-college/update-college.component';
import {DeleteDepartmentComponent} from './college/components/department/delete-department/delete-department.component';
import {UpdateDepartmentComponent} from './college/components/department/update-department/update-department.component';
import {RootDepartmentComponent} from './college/components/department/root-department/root-department.component';
import {DeleteCollegeComponent} from './college/components/college/delete-college/delete-college.component';
import {RootProfessorComponent} from './college/components/professors/root-professor/root-professor.component';
import {DeleteProfessorComponent} from './college/components/professors/delete-professor/delete-professor.component';
import {PromotionModule} from './promotion/promotion.module';

import {EducationalOfferModule} from './educational-offer/educational-offer.module';
import {AddEducationalOfferComponent} from './educational-offer/components/educationa-offer/add-educational-offer/add-educational-offer.component';
import {UpdateEducationalOfferComponent} from './educational-offer/components/educationa-offer/update-educational-offer/update-educational-offer.component';
import {RootPromotionComponent} from './educational-offer/components/promotion/root-promotion/root-promotion.component';
import {UpdatePromotionComponent} from './promotion/components/promotion/update-promotion/update-promotion.component';
import {RootStudentComponent} from './promotion/components/student/root-student/root-student.component';
import {ProfessorModule} from './professor/professor.module';
import {UpdateProfessorComponent} from './professor/components/professor/update-professor/update-professor.component';
import {RootCoursComponent} from './professor/components/cours/root-cours/root-cours.component';
import {UpdateCourseComponent} from './professor/components/cours/update-course/update-course.component';
import {DeleteCourseComponent} from './professor/components/cours/delete-course/delete-course.component';
import {StudentModule} from './student/student.module';
import {DeleteStudentForPromotionComponent} from './promotion/components/student/delete-student/delete-student-for-promotion.component';
import {DeleteStudentComponent} from './student/components/delete-student/delete-student.component';
import {UpdateStudentComponent} from './student/components/update-student/update-student.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    CollegeModule,
    PromotionModule,
    EducationalOfferModule,
    ProfessorModule,
    StudentModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AddCollegeComponent,
    UpdateCollegeComponent,
    DeleteCollegeComponent,
    RootDepartmentComponent,
    UpdateDepartmentComponent,
    DeleteDepartmentComponent,
    RootProfessorComponent,
    DeleteProfessorComponent,
    AddEducationalOfferComponent,
    UpdateEducationalOfferComponent,
    RootPromotionComponent,
    UpdatePromotionComponent,
    RootStudentComponent,
    DeleteStudentForPromotionComponent,
    UpdateProfessorComponent,
    RootCoursComponent,
    UpdateCourseComponent,
    DeleteCourseComponent,
    DeleteStudentComponent,
    UpdateStudentComponent
  ]
})
export class AppModule {
}
