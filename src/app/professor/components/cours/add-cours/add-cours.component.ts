import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {GetProfessor} from '../../../model/GetProfessor';
import {PostPutCurs} from '../../../model/PostPutCurs';
import {Subscription} from 'rxjs';
import {CoursService} from '../../../services/cours.service';

@Component({
  selector: 'app-add-cours',
  templateUrl: './add-cours.component.html',
  styleUrls: ['./add-cours.component.css']
})
export class AddCoursComponent implements OnInit, OnDestroy {
  @Input('professor') private professor: GetProfessor;
  private curs: PostPutCurs;
  private x: Subscription;


  constructor(private cursService: CoursService) {
  }

  ngOnInit() {
    this.curs = new PostPutCurs();
  }

  ngOnDestroy() {
    if (this.x) {
      this.x.unsubscribe();
    }
  }

  addCourse() {
    this.x = this.cursService.addCourse(this.professor, this.curs)
      .subscribe();

  }
}
