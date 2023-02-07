package com.tronghung.qlvnc.Services;

import com.tronghung.qlvnc.entity.Monhoc;

import java.util.List;

public interface MonhocService {
    Monhoc saveMonhoc(Monhoc monhoc);

    List<Monhoc> getMonhoc();

    Monhoc getMonhocById(Integer id);


    Monhoc updateMonhoc(Monhoc monhoc);

    void deleteMonhocById(Integer id);
}
