package com.tronghung.qlvnc.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table
@Data
public class Accteacher {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String taikhoan;
    private String matkhau;

}
