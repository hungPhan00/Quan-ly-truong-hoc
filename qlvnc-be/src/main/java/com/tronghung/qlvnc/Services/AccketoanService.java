package com.tronghung.qlvnc.Services;

import com.tronghung.qlvnc.entity.Accketoan;

import java.util.List;

public interface AccketoanService {
    Accketoan saveAccketoan(Accketoan accketoan);

    List<Accketoan> getAccketoan();

    Accketoan getAccketoanById(Integer id);


    Accketoan updateAccketoan(Accketoan accketoan);

    void deleteAccketoanById(Integer id);
}
