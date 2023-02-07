package com.tronghung.qlvnc.Services.Impl;

import com.tronghung.qlvnc.Services.AccteacherService;
import com.tronghung.qlvnc.entity.Accteacher;

import com.tronghung.qlvnc.repository.AccteacherRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccteacherServiceImpl implements AccteacherService {

    @Autowired
    private AccteacherRepo accteacherRepo;
    @Override
    public Accteacher saveAccteacher(Accteacher accteacher) {
        return accteacherRepo.save(accteacher);
    }

    @Override
    public List<Accteacher> getAccteacher() {
        return accteacherRepo.findAll();
    }

    @Override
    public Accteacher getAccteacherById(Integer id) {
        return accteacherRepo.findById(id).get();
    }

    @Override
    public Accteacher updateAccteacher(Accteacher accteacher) {
        return accteacherRepo.save(accteacher);
    }

    @Override
    public void deleteAccteacherById(Integer id) {
        accteacherRepo.deleteById(id);
    }
}
