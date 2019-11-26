import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {SearchStudentComponent} from './components/search-student/search-student.component';
import {FormsModule} from '@angular/forms';
import { DeleteStudentComponent } from './components/delete-student/delete-student.component';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import { UpdateStudentComponent } from './components/update-student/update-student.component';


@NgModule({
  declarations: [SearchStudentComponent, DeleteStudentComponent, UpdateStudentComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [HttpClient],
  exports: [SearchStudentComponent]
})
export class StudentModule {
}
