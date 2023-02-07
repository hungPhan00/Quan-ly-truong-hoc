package com.tronghung.qlvnc.entity;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table
@Data
public class Teacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String magv;
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    private LocalDate birthday;
    private String chucvu;
    private String khoa;
    private String sdt;
    private String gmail;
    private String tinhtrang;
    private String imgurl;
    private Integer luong;
    private Integer sothang;
    private Integer luongdatra;
}
