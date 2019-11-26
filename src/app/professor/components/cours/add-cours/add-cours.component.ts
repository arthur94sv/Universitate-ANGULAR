import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {GetProfessor} from '../../../model/GetProfessor';
import {PostPutCurs} from '../../../model/PostPutCurs';
import {Subscription} from 'rxjs';
import {CoursService} from '../../../services/cours.service';
import {CursError} from '../../../errors/CursError';

@Component({
  selector: 'app-add-cours',
  templateUrl: './add-cours.component.html',
  styleUrls: ['./add-cours.component.css']
})
export class AddCoursComponent implements OnInit, OnDestroy {
  @Input('professor') private professor: GetProfessor;
  private curs: PostPutCurs;
  private x: Subscription;

  private cursError: CursError;

  constructor(private cursService: CoursService) {
    this.curs = new PostPutCurs();
    this.cursError = new CursError();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }
  }

  addCourse() {
    this.x = this.cursService.addCourse(this.professor, this.curs).subscribe(response => this.cursError = response);
    this.curs = new PostPutCurs();
  }
}
