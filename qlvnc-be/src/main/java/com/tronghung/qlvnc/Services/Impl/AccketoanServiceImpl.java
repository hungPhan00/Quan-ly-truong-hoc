package com.tronghung.qlvnc.Services.Impl;

import com.tronghung.qlvnc.Services.AccketoanService;
import com.tronghung.qlvnc.entity.Accketoan;
import com.tronghung.qlvnc.repository.AccketoanRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AccketoanServiceImpl implements AccketoanService {

    @Autowired
    private AccketoanRepo accketoanRepo;
    @Override
    public Accketoan saveAccketoan(Accketoan accketoan) {
        return accketoanRepo.save(accketoan);
    }

    @Override
    public List<Accketoan> getAccketoan() {
        return accketoanRepo.findAll();
    }

    @Override
    public Accketoan getAccketoanById(Integer id) {
        return accketoanRepo.findById(id).get();
    }

    @Override
    public Accketoan updateAccketoan(Accketoan accketoan) {
        return accketoanRepo.save(accketoan);
    }

    @Override
    public void deleteAccketoanById(Integer id) {
        accketoanRepo.deleteById(id);
    }
}
