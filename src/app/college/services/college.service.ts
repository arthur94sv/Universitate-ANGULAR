import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {College} from '../model/College';


@Injectable({
  providedIn: 'root'
})
export class CollegeService {

  constructor(private http: HttpClient) {
  }

  public getAllColleges() {
    return this.http.get<College[]>('http://localhost:8081/colleges');
  }

  public addCollege(college: College) {
    return this.http.post('http://localhost:8081/colleges', college);
  }

  public updateCollege(college: College) {
    return this.http.put('http://localhost:8081/colleges/' + college.id, college);
  }

  public deleteCollege(college: College) {
    return this.http.delete('http://localhost:8081/colleges/' + college.id);
  }

}
