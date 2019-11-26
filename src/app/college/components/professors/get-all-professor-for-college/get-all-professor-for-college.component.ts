import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProfessorService} from '../../../../professor/services/professor.service';
import {Subscription} from 'rxjs';
import {MatDialog} from '@angular/material';
import {DeleteProfessorComponent} from '../delete-professor/delete-professor.component';
import {College} from '../../../model/College';
import {GetProfessorForCollege} from '../../../model/professor/GetProfessorForCollege';


@Component({
  selector: 'app-get-all-professor-for-college',
  templateUrl: './get-all-professor-for-college.component.html',
  styleUrls: ['./get-all-professor-for-college.component.css']
})
export class GetAllProfessorForCollegeComponent implements OnInit, OnDestroy {
  private listOfProfessors: GetProfessorForCollege[];
  private displayListOfProfessors = false;
  @Input('college') private college: College;
  private x: Subscription;


  constructor(private professorService: ProfessorService, private dialog: MatDialog) {
  }

  ngOnInit() {


  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }
  }

  getProfessors() {
    this.x = this.professorService.getAllProfessorsForCollege(this.college)
      .subscribe(response => this.listOfProfessors = response);
    this.displayListOfProfessors = true;
  }

  close() {
    this.displayListOfProfessors = false;
  }

  openDeleteProfessorDialog(professor: GetProfessorForCollege) {
    this.dialog.open(DeleteProfessorComponent, {data:{professor: professor}});
  }
}
