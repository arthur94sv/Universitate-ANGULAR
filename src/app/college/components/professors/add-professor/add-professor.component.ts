import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PostProfessorForCollege} from '../../../model/professor/PostProfessorForCollege';
import {ProfessorService} from '../../../../professor/services/professor.service';
import {DepartmentService} from '../../../services/department.service';

import {Department} from '../../../model/Department';
import {Subscription} from 'rxjs';
import {Grad} from '../../../model/Grad';
import {College} from '../../../model/College';

@Component({
  selector: 'app-add-professor',
  templateUrl: './add-professor.component.html',
  styleUrls: ['./add-professor.component.css']
})
export class AddProfessorComponent implements OnInit, OnDestroy {
  private professor: PostProfessorForCollege;
  @Input('college') private college: College;
  private listOfDepartments: Department[];
  private departmentOfProfessor: Department;

  private listOfGrads: Grad[] = [
    {id: 1, grad: 'asistent universitar'},
    {id: 2, grad: 'lector universitar'},
    {id: 3, grad: 'conferentiar universitar'},
    {id: 4, grad: 'profesor universitar'}
  ];

  private departmentsSubscription: Subscription;
  private professorSubscription: Subscription;


  constructor(private professorService: ProfessorService, private departmentService: DepartmentService) {
    this.professor = new PostProfessorForCollege();
    this.departmentOfProfessor = new Department();
  }

  ngOnInit() {
    this.departmentsSubscription = this.departmentService.getAllDepartments(this.college)
      .subscribe(response => this.listOfDepartments = response);
  }

  ngOnDestroy() {
    this.departmentsSubscription.unsubscribe();
    if (this.professorSubscription) {
      this.professorSubscription.unsubscribe();
    }

  }

  addProfessor() {
    this.professorSubscription = this.professorService
      .addProfessorToDepartment(this.departmentOfProfessor, this.professor)
      .subscribe();

  }


}
