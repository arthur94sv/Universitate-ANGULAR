import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {CollegeService} from '../college/services/college.service';
import {FormsModule} from '@angular/forms';
import {GetPromotionsComponent} from './components/promotion/get-promotions/get-promotions.component';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import {UpdatePromotionComponent} from './components/promotion/update-promotion/update-promotion.component';
import {RootStudentComponent} from './components/student/root-student/root-student.component';
import {GetAllStudentsForPromotionComponent} from './components/student/get-all-students-for-promotion/get-all-students-for-promotion.component';
import {AddStudentComponent} from './components/student/add-student/add-student.component';
import { DeleteStudentForPromotionComponent } from './components/student/delete-student/delete-student-for-promotion.component';
import {StudentService} from '../student/service/student.service';


@NgModule({
  declarations: [
    GetPromotionsComponent,
    UpdatePromotionComponent,
    RootStudentComponent,
    GetAllStudentsForPromotionComponent,
    AddStudentComponent,
    DeleteStudentForPromotionComponent],
  imports: [
    CommonModule, FormsModule, MatDialogModule, MatButtonModule
  ],
  exports: [],
  providers: [HttpClient, CollegeService, StudentService]
})
export class PromotionModule {
}
