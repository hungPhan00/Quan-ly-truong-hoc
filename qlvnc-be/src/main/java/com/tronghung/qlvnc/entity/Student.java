package com.tronghung.qlvnc.entity;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;
@Entity
@Table
@Data
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate birthday;
    private String hometown;
    private String lop;
    private String nganh;
    private String gmail;
    private String tinhtrang;
    private String imgurl;
    private Integer hocphi;
    private Integer nohocphi;
    private String ghichu;
    private String cotmoi;
}
