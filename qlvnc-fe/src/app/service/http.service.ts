import { Accadmin } from './../model/accadmin';
import { Accketoan } from './../model/accketoan';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Monhoc } from 'app/model/monhoc';
import { Teacher } from 'app/model/teacher';
import { Observable } from 'rxjs';

import { Student } from './../model/student';
import { Accteacher } from 'app/model/accteacher';
import { Mess } from 'app/model/mess';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiServer = "http://localhost:8080";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }
// Student
  public getStudent(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.apiServer}/student/all`);
  }

  public addStudent(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(`${this.apiServer}/student/add`, student);
  }

  public updateStudent(student: Student): Observable<Student> {
    return this.httpClient.put<Student>(`${this.apiServer}/student/update`, student);
  }

  public deleteStudent(studentId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiServer}/student/delete/${studentId}`);
  }

  // getById(id): Observable<Student> {
  //   return this.httpClient.get<Student>(this.apiServer + '/student/' + id)
  // }
  //Giang vien
  public getTeacher(): Observable<Teacher[]> {
    return this.httpClient.get<Teacher[]>(`${this.apiServer}/teacher/all`);
  }

  public addTeacher(teacher: Teacher): Observable<Teacher> {
    return this.httpClient.post<Teacher>(`${this.apiServer}/teacher/add`, teacher);
  }

  public updateTeacher(teacher: Teacher): Observable<Teacher> {
    return this.httpClient.put<Teacher>(`${this.apiServer}/teacher/update`, teacher);
  }

  public deleteTeacher(teacherId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiServer}/teacher/delete/${teacherId}`);
  }

  //Mon hoc
  public getMonhoc(): Observable<Monhoc[]> {
    return this.httpClient.get<Monhoc[]>(`${this.apiServer}/monhoc/all`);
  }

  public addMonhoc(monhoc: Monhoc): Observable<Monhoc> {
    return this.httpClient.post<Monhoc>(`${this.apiServer}/monhoc/add`, monhoc);
  }

  public updateMonhoc(monhoc: Monhoc): Observable<Monhoc> {
    return this.httpClient.put<Monhoc>(`${this.apiServer}/monhoc/update`, monhoc);
  }

  public deleteMonhoc(monhocId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiServer}/monhoc/delete/${monhocId}`);
  }
  //Accketoan
  public getAccketoan(): Observable<Accketoan[]> {
    return this.httpClient.get<Accketoan[]>(`${this.apiServer}/accketoan/all`);
  }

  public addAccketoan(accketoan: Accketoan): Observable<Accketoan> {
    return this.httpClient.post<Accketoan>(`${this.apiServer}/accketoan/add`, accketoan);
  }

  public updateAccketoan(accketoan: Accketoan): Observable<Accketoan> {
    return this.httpClient.put<Accketoan>(`${this.apiServer}/accketoan/update`, accketoan);
  }

  public deleteAccketoan(accketoanId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiServer}/accketoan/delete/${accketoanId}`);
  }

  //Accteacher
  public getAccteacher(): Observable<Accteacher[]> {
    return this.httpClient.get<Accteacher[]>(`${this.apiServer}/accteacher/all`);
  }

  public addAccteacher(accteacher: Accteacher): Observable<Accteacher> {
    return this.httpClient.post<Accteacher>(`${this.apiServer}/accteacher/add`, accteacher);
  }

  public updateAccteacher(accteacher: Accteacher): Observable<Accteacher> {
    return this.httpClient.put<Accteacher>(`${this.apiServer}/accteacher/update`, accteacher);
  }

  public deleteAccteacher(accteacherId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiServer}/accteacher/delete/${accteacherId}`);
  }
  //mess
  public getMess(): Observable<Mess[]> {
    return this.httpClient.get<Mess[]>(`${this.apiServer}/mess/all`);
  }

  public addMess(mess: Mess): Observable<Mess> {
    return this.httpClient.post<Mess>(`${this.apiServer}/mess/add`, mess);
  }

  public updateMess(mess: Mess): Observable<Mess> {
    return this.httpClient.put<Mess>(`${this.apiServer}/mess/update`, mess);
  }

  public deleteMess(messId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiServer}/mess/delete/${messId}`);
  }
  //admin
  public getAdmin(): Observable<Accadmin[]> {
    return this.httpClient.get<Accadmin[]>(`${this.apiServer}/admin/all`);
  }

  public addAdmin(accadmin: Accadmin): Observable<Accadmin> {
    return this.httpClient.post<Accadmin>(`${this.apiServer}/admin/add`, accadmin);
  }

  public updateAdmin(accadmin: Accadmin): Observable<Accadmin> {
    return this.httpClient.put<Accadmin>(`${this.apiServer}/admin/update`, accadmin);
  }

  public deleteAdmin(accadminId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.apiServer}/admin/delete/${accadminId}`);
  }
}