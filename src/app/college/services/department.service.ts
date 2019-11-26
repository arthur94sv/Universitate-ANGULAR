import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Department} from '../model/Department';
import {College} from '../model/College';
import {DepartmentError} from '../errors/DepartmentError';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) {
  }


  public getAllDepartments(college: College) {
    return this.http.get<Department[]>('http://localhost:8081/colleges/' + college.id + '/departments');
  }

  public addDepartment(college: College, department: Department) {
    return this.http.post<DepartmentError>('http://localhost:8081/colleges/' + college.id + '/departments', department);
  }

  public updateDepartment(department: Department) {
    return this.http.put('http://localhost:8081/departments/' + department.id, department);
  }

  public deleteDepartment(department: Department) {
    return this.http.delete('http://localhost:8081/departments/' + department.id);
  }
}
