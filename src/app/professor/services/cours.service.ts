import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GetProfessor} from '../model/GetProfessor';
import {PostPutCurs} from '../model/PostPutCurs';
import {GetCurs} from '../model/GetCurs';

@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private http: HttpClient) {
  }

  public addCourse(professor: GetProfessor, cours: PostPutCurs) {
    return this.http.post('http://localhost:8081/professors/' + professor.id + '/courses', cours);
  }

  public getCoursesForProfessor(professor: GetProfessor) {
    return this.http.get<GetCurs[]>('http://localhost:8081/professors/' + professor.id + '/courses');
  }

  public updateCurse(curs: GetCurs) {
    return this.http.put('http://localhost:8081/courses/' + curs.id, curs);
  }

  public deleteCurse(curs: GetCurs) {
    return this.http.delete('http://localhost:8081/courses/' + curs.id);
  }


}
