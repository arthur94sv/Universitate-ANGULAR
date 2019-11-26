import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProfessorService} from '../../../services/professor.service';
import {Subscription} from 'rxjs';
import {GetProfessor} from '../../../model/GetProfessor';
import {MatDialog} from '@angular/material';
import {UpdateProfessorComponent} from '../update-professor/update-professor.component';
import {RootCoursComponent} from '../../cours/root-cours/root-cours.component';

@Component({
  selector: 'app-search-professors',
  templateUrl: './search-professors.component.html',
  styleUrls: ['./search-professors.component.css']
})
export class SearchProfessorsComponent implements OnInit, OnDestroy {
  private nume: string;
  private prenume: string;

  private x: Subscription;
  private displayListOfProfessors = false;
  private listOfProfessors: GetProfessor[];

  constructor(private professorService: ProfessorService, private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }
  }

  searchForProfessor() {
    this.x = this.professorService.searchProfessor(this.nume, this.prenume).subscribe(response => this.listOfProfessors = response);
    this.displayListOfProfessors = true;
    this.nume = null;
    this.prenume = null;
  }

  close() {
    this.displayListOfProfessors = false;
  }

  openUpdateProfessorDialog(professor: GetProfessor) {
    this.dialog.open(UpdateProfessorComponent,
      {data: {professor: professor}});
  }

  openRootCoursDialog(professor: GetProfessor) {
    this.dialog.open(RootCoursComponent,
      {data: {professor: professor}});
  }

}
