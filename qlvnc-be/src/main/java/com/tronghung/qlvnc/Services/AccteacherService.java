package com.tronghung.qlvnc.Services;

import com.tronghung.qlvnc.entity.Accteacher;


import java.util.List;

public interface AccteacherService {
    Accteacher saveAccteacher(Accteacher accteacher);

    List<Accteacher> getAccteacher();

    Accteacher getAccteacherById(Integer id);


    Accteacher updateAccteacher(Accteacher accteacher);

    void deleteAccteacherById(Integer id);
}
