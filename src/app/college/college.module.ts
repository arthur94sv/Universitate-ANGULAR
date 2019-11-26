import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AddCollegeComponent} from './components/college/add-college/add-college.component';
import {GetAllCollegesComponent} from './components/college/get-all-colleges/get-all-colleges.component';
import {RootDepartmentComponent} from './components/department/root-department/root-department.component';
import {DeleteCollegeComponent} from './components/college/delete-college/delete-college.component';
import {RootCollegeComponent} from './components/college/root-college/root-college.component';
import {UpdateCollegeComponent} from './components/college/update-college/update-college.component';
import {AddDepartmentComponent} from './components/department/add-department/add-department.component';
import {GetAllDepartmentsComponent} from './components/department/get-all-departments/get-all-departments.component';
import {DeleteDepartmentComponent} from './components/department/delete-department/delete-department.component';
import {UpdateDepartmentComponent} from './components/department/update-department/update-department.component';
import {GetAllProfessorForCollegeComponent} from './components/professors/get-all-professor-for-college/get-all-professor-for-college.component';
import {SelectCollegeDropdownComponent} from './components/college/select-college-dropdown/select-college-dropdown.component';
import {FormsModule} from '@angular/forms';
import {MatDialogModule, MatButtonModule} from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {RootProfessorComponent} from './components/professors/root-professor/root-professor.component';
import {AddProfessorComponent} from './components/professors/add-professor/add-professor.component';
import {DeleteProfessorComponent} from './components/professors/delete-professor/delete-professor.component';
import {ProfessorService} from '../professor/services/professor.service';


@NgModule({
  declarations: [
    GetAllCollegesComponent,
    RootCollegeComponent,
    AddCollegeComponent,
    UpdateCollegeComponent,
    DeleteCollegeComponent,
    RootDepartmentComponent,
    GetAllDepartmentsComponent,
    AddDepartmentComponent,
    DeleteDepartmentComponent,
    UpdateDepartmentComponent,
    GetAllProfessorForCollegeComponent,
    SelectCollegeDropdownComponent,
    RootProfessorComponent,
    AddProfessorComponent,
    DeleteProfessorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [HttpClient, ProfessorService],
  exports: [RootCollegeComponent]
})
export class CollegeModule {
}
