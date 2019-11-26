import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {AddEducationalOfferComponent} from '../add-educational-offer/add-educational-offer.component';

@Component({
  selector: 'app-root-educational-offer',
  templateUrl: './root-educational-offer.component.html',
  styleUrls: ['./root-educational-offer.component.css']
})
export class RootEducationalOfferComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openAddEducationalOfferDialog(){
    this.dialog.open(AddEducationalOfferComponent);
  }
}
