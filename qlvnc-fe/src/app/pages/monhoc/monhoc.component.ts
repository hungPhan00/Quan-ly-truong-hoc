import { Monhoc } from './../../model/monhoc';
import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { HttpService } from 'app/service/http.service';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'monhoc',
  templateUrl: './monhoc.component.html',
  styleUrls: ['./monhoc.component.scss']
})
export class MonhocComponent implements OnInit {
  public monhoc: Monhoc[];
  public editMonhoc: Monhoc;
  public deleteMonhocs: Monhoc;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getMonhoc();
  }
  public getMonhoc(): void {
    this.httpService.getMonhoc().subscribe(
      (response: Monhoc[]) => {
        this.monhoc = response;
        console.log(this.monhoc);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddMonhoc(addForm: NgForm): void {
    document.getElementById("add-student-form").click();
    this.httpService.addMonhoc(addForm.value).subscribe(
      (response: Monhoc) => {
        console.log(response);
        this.getMonhoc();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateMonhoc(monhoc: Monhoc): void {
    this.httpService.updateMonhoc(monhoc).subscribe(
      (response: Monhoc) => {
        console.log(response);
        this.getMonhoc();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteMonhoc(monhocId: number): void {
    this.httpService.deleteMonhoc(monhocId).subscribe(
      (response: void) => {
        console.log(response);
        this.getMonhoc();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public searchMonhoc(key: string): void {
    console.log(key);
    const results: Monhoc[] = [];
    for (const monho of this.monhoc) {
      if (
        monho.name.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        monho.mamh.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        monho.gvphutrach.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        monho.lichday.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        monho.caday.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        monho.ngaybatdau.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        monho.ngayketthuc.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        monho.sotiet.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        monho.tinchi.toLowerCase().indexOf(key.toLowerCase()) !== -1 
      ) {
        results.push(monho);
      }
    }
    this.monhoc = results;
    if (results.length === 0 || !key) {
      this.getMonhoc();
    }
  }

  public onOpenModal(monhoc: Monhoc, mode: string): void {
    const container = document.getElementById("maincontainer");
    const button = document.createElement("button");
    button.type = "button";
    button.style.display = "none";
    button.setAttribute("data-toggle", "modal");
    if (mode === "add") {
      button.setAttribute("data-target", "#addStudentModal");
    }
    if (mode === "edit") {
      this.editMonhoc = monhoc;
      button.setAttribute("data-target", "#updateStudentModal");
    }
    if (mode === "delete") {
      this.deleteMonhocs = monhoc;
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
