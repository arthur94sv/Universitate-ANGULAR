import {Component, Inject, Input, OnInit} from '@angular/core';
import {GetProfessor} from '../../../model/GetProfessor';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-root-cours',
  templateUrl: './root-cours.component.html',
  styleUrls: ['./root-cours.component.css']
})
export class RootCoursComponent implements OnInit {
  private professor: GetProfessor;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.professor = this.data.professor;
  }

}
