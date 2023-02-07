import { Router } from "@angular/router";

import { Component, OnInit } from "@angular/core";
import { HttpService } from "app/service/http.service";
import { Student } from "app/model/student";
import { HttpErrorResponse } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import * as XLSX from 'xlsx';

@Component({
  selector: "table-cmp",
  templateUrl: "table.component.html",
})
export class TableComponent implements OnInit {
  public student: Student[];
  public editStudent: Student;
  public deleteStudents: Student;

  constructor(private httpService: HttpService) {}
  ngOnInit() {
    this.getStudent();
  }

  public getStudent(): void {
    this.httpService.getStudent().subscribe(
      (response: Student[]) => {
        this.student = response;
        console.log(this.student);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddStudent(addForm: NgForm): void {
    document.getElementById("add-student-form").click();
    this.httpService.addStudent(addForm.value).subscribe(
      (response: Student) => {
        console.log(response);
        this.getStudent();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateStudent(student: Student): void {
    this.httpService.updateStudent(student).subscribe(
      (response: Student) => {
        console.log(response);
        this.getStudent();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteStudent(studentId: number): void {
    this.httpService.deleteStudent(studentId).subscribe(
      (response: void) => {
        console.log(response);
        this.getStudent();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchStudent(key: string): void {
    console.log(key);
    const results: Student[] = [];
    for (const studen of this.student) {
      if (
        studen.name.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        studen.birthday.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        studen.hometown.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        studen.lop.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        studen.nganh.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        studen.gmail.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        studen.tinhtrang.toLowerCase().indexOf(key.toLowerCase()) !== -1 
      ) {
        results.push(studen);
      }
    }
    this.student = results;
    if (results.length === 0 || !key) {
      this.getStudent();
    }
  }

  public onOpenModal(student: Student, mode: string): void {
    const container = document.getElementById("maincontainer");
    const button = document.createElement("button");
    button.type = "button";
    button.style.display = "none";
    button.setAttribute("data-toggle", "modal");
    if (mode === "add") {
      button.setAttribute("data-target", "#addStudentModal");
    }
    if (mode === "edit") {
      this.editStudent = student;
      button.setAttribute("data-target", "#updateStudentModal");
    }
    if (mode === "delete") {
      this.deleteStudents = student;
      button.setAttribute("data-target", "#deleteStudentModal");
    }
    container.appendChild(button);
    button.click();
  }

  fileName= 'ExcelSheet.xlsx';
  printReport(): void {
    let element = document.getElementById("studenttable");
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    XLSX.writeFile(wb, this.fileName);
  }

  printpdf(): void {
    window.print();
  }
}
