import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {College} from '../../../model/College';

@Component({
  selector: 'app-root-professor',
  templateUrl: './root-professor.component.html',
  styleUrls: ['./root-professor.component.css']
})
export class RootProfessorComponent implements OnInit {
private college: College;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit() {
    this.college = this.data.college;
  }

}
