import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PostProfessorForCollege} from '../../college/model/professor/PostProfessorForCollege';
import {ProfessorError} from '../../college/errors/ProfessorError';
import {College} from '../../college/model/College';
import {GetProfessorForCollege} from '../../college/model/professor/GetProfessorForCollege';
import {Department} from '../../college/model/Department';
import {GetProfessor} from '../model/GetProfessor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private http: HttpClient) {
  }

  public getAllProfessorsForCollege(college: College) {
    return this.http.get<GetProfessorForCollege[]>('http://localhost:8081/colleges/' + college.id + '/professors');
  }

  public addProfessorToDepartment(department: Department, professor: PostProfessorForCollege) {
    return this.http.post<ProfessorError>('http://localhost:8081/departments/' + department.id + '/professors', professor);
  }

  public deleteProfessor(professor: GetProfessorForCollege) {
    return this.http.delete('http://localhost:8081/professors/' + professor.id);
  }

  public searchProfessor(nume: string, prenume: string) {
    if (prenume != null) {
      return this.http.get<GetProfessor[]>('http://localhost:8081/professors?nume=' + nume + '&prenume=' + prenume);
    } else {
      return this.http.get<GetProfessor[]>('http://localhost:8081/professors?nume=' + nume);
    }
  }

  public updateProfessor(professor: GetProfessor) {
    return this.http.put('http://localhost:8081/professors/' + professor.id, professor);
  }
}
