import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {AddCollegeComponent} from '../add-college/add-college.component';

@Component({
  selector: 'app-root-college',
  templateUrl: './root-college.component.html',
  styleUrls: ['./root-college.component.css']
})
export class RootCollegeComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  opedDialog() {
    this.dialog.open(AddCollegeComponent);
  }

}
