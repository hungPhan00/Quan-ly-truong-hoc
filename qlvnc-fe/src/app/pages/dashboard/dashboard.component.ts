import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Student } from "app/model/student";
import { Teacher } from "app/model/teacher";
import { HttpService } from "app/service/http.service";
import * as XLSX from 'xlsx';
@Component({
  selector: "dashboard-cmp",
  moduleId: module.id,
  templateUrl: "dashboard.component.html",
})
export class DashboardComponent implements OnInit {
  public student: Student[];
  public editStudent: Student;
  public deleteStudents: Student;
  public teacher: Teacher[];
  public editTeacher: Teacher;
  public deleteTeachers: Teacher;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.getStudent();
    this.getTeacher();
    this.total = 0;
    this.total1 = 0;
  }
  public getStudent(): void {
    this.httpService.getStudent().subscribe(
      (response: Student[]) => {
        this.student = response;
        this.findsum(this.student);
        this.sum(this.student);
        console.log(this.student);       

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public getTeacher(): void {
    this.httpService.getTeacher().subscribe(
      (response: Teacher[]) => {
        this.teacher = response;
        this.findsum1(this.teacher);
        this.sum1(this.teacher);
        console.log(this.teacher);

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public total;
  private value;
  findsum(data) {
    debugger;
    this.value = data;
    for (let j = 0; j < data.length; j++) {
      this.total += this.value[j].hocphi;
    }
  }

  public total1;
  private value1;
  findsum1(data1) {
    debugger;
    this.value1 = data1;
    for (let j = 0; j < data1.length; j++) {
      this.total1 += this.value1[j].luongdatra;
      console.log(this.total1);
    }
  }
  public cout = 0;
  private value2;
  sum(data) {
    debugger;
    this.value2 = data;
    this.cout = data.length;
  }
  public cout1 = 0;
  private value3;
  sum1(data) {
    debugger;
    this.value3 = data;
    this.cout1 = data.length;
  }


  fileName= 'ExcelSheet.xlsx';
  printReport(): void {
    let element = document.getElementById("studenttable");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    XLSX.writeFile(wb, this.fileName);
  }
}
