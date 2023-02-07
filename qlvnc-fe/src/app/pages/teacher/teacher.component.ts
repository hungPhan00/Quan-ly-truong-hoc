import { Teacher } from './../../model/teacher';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/service/http.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import * as XLSX from 'xlsx';

@Component({
  selector: 'teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent implements OnInit {
  public teacher: Teacher[];
  public editTeacher: Teacher;
  public deleteTeachers: Teacher;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getTeacher();
  }
  public getTeacher(): void {
    this.httpService.getTeacher().subscribe(
      (response: Teacher[]) => {
        this.teacher = response;
        console.log(this.teacher);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddTeacher(addForm: NgForm): void {
    document.getElementById("add-student-form").click();
    this.httpService.addTeacher(addForm.value).subscribe(
      (response: Teacher) => {
        console.log(response);
        this.getTeacher();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateTeacher(teacher: Teacher): void {
    this.httpService.updateTeacher(teacher).subscribe(
      (response: Teacher) => {
        console.log(response);
        this.getTeacher();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteTeacher(teacherId: number): void {
    this.httpService.deleteTeacher(teacherId).subscribe(
      (response: void) => {
        console.log(response);
        this.getTeacher();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchTeacher(key: string): void {
    console.log(key);
    const results: Teacher[] = [];
    for (const teache of this.teacher) {
      if (
        teache.name.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        teache.magv.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        teache.birthday.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        teache.chucvu.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        teache.khoa.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        teache.sdt.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        teache.gmail.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        teache.tinhtrang.toLowerCase().indexOf(key.toLowerCase()) !== -1
      ) {
        results.push(teache);
      }
    }
    this.teacher = results;
    if (results.length === 0 || !key) {
      this.getTeacher();
    }
  }

  public onOpenModal(teacher: Teacher, mode: string): void {
    const container = document.getElementById("maincontainer");
    const button = document.createElement("button");
    button.type = "button";
    button.style.display = "none";
    button.setAttribute("data-toggle", "modal");
    if (mode === "add") {
      button.setAttribute("data-target", "#addStudentModal");
    }
    if (mode === "edit") {
      this.editTeacher = teacher;
      button.setAttribute("data-target", "#updateStudentModal");
    }
    if (mode === "delete") {
      this.deleteTeachers = teacher;
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
