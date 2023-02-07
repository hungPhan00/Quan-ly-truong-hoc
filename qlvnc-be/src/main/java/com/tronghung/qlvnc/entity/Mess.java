package com.tronghung.qlvnc.entity;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table
@Data
public class Mess {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String gmail;
    private String chuyennganh;
    private String tinnhan;
}
