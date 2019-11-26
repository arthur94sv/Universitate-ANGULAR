import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchProfessorsComponent} from './components/professor/search-professors/search-professors.component';
import {HttpClient} from '@angular/common/http';
import {MatButtonModule, MatDialogModule, MatExpansionModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {UpdateProfessorComponent} from './components/professor/update-professor/update-professor.component';
import {RootCoursComponent} from './components/cours/root-cours/root-cours.component';
import {AddCoursComponent} from './components/cours/add-cours/add-cours.component';
import {GetAllCoursesForProfessorComponent} from './components/cours/get-all-courses-for-professor/get-all-courses-for-professor.component';
import {UpdateCourseComponent} from './components/cours/update-course/update-course.component';
import {DeleteCourseComponent} from './components/cours/delete-course/delete-course.component';


@NgModule({
  declarations: [SearchProfessorsComponent, UpdateProfessorComponent, RootCoursComponent, AddCoursComponent, GetAllCoursesForProfessorComponent, UpdateCourseComponent, DeleteCourseComponent],
  imports: [
    CommonModule,
    MatExpansionModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [HttpClient],
  exports: [SearchProfessorsComponent]
})
export class ProfessorModule {
}
