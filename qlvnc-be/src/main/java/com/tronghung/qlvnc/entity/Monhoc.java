package com.tronghung.qlvnc.entity;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table
@Data
public class Monhoc {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String mamh;
    private String gvphutrach;
    private String lichday;
    private String caday;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate ngaybatdau;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate ngayketthuc;

    private String sotiet;
    private String tinchi;

}
