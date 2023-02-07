package com.tronghung.qlvnc.Services;

import com.tronghung.qlvnc.entity.Mess;

import java.util.List;

public interface MessService {
    Mess saveMess(Mess mess);

    List<Mess> getMess();

    Mess getMessById(Integer id);

    Mess updateMess(Mess mess);

    void deleteMessById(Integer id);
}
