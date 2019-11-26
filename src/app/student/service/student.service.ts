import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Student} from '../model/Student';
import {Promotion} from '../../promotion/model/Promotion';
import {StudentForPromotion} from '../../promotion/model/StudentForPromotion';
import {AddStudentToPromotion} from '../../promotion/model/AddStudentToPromotion';
import {StudentError} from '../../promotion/errors/StudentError';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) {
  }

  public searchStudent(nume: string, prenume: string) {
    if (prenume != null) {
      return this.http.get<Student[]>('http://localhost:8081/students?nume=' + nume + '&prenume=' + prenume);
    } else {
      return this.http.get<Student[]>('http://localhost:8081/students?nume=' + nume);
    }
  }

  public getStudentsForPromotion(promotion: Promotion) {
    return this.http.get<StudentForPromotion[]>('http://localhost:8081/promotions/' + promotion.id + '/students');
  }

  public addStudent(promotion: Promotion, student: AddStudentToPromotion) {
    return this.http.post<StudentError>('http://localhost:8081/promotions/' + promotion.id + '/students', student);
  }

  public deleteStudentFromPromotion(promotion: Promotion, student: StudentForPromotion) {
    return this.http.delete('http://localhost:8081/promotions/' + promotion.id + '/students/' + student.id);
  }

  public deleteStudent(student: Student) {
    return this.http.delete('http://localhost:8081/students/' + student.id);
  }

  public updateStudent(student: Student) {
    return this.http.put('http://localhost:8081/students/' + student.id, student);
  }
}
