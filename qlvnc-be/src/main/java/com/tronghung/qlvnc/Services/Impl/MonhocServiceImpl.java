package com.tronghung.qlvnc.Services.Impl;

import com.tronghung.qlvnc.Services.MonhocService;
import com.tronghung.qlvnc.entity.Monhoc;
import com.tronghung.qlvnc.repository.MonhocRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MonhocServiceImpl implements MonhocService {
    @Autowired
    private MonhocRepo monhocRepo;

    @Override
    public Monhoc saveMonhoc(Monhoc monhoc) {
        return monhocRepo.save(monhoc);
    }

    @Override
    public List<Monhoc> getMonhoc() {
        return monhocRepo.findAll();
    }

    @Override
    public Monhoc getMonhocById(Integer id) {
        return monhocRepo.findById(id).get();
    }

    @Override
    public Monhoc updateMonhoc(Monhoc monhoc) {
        return monhocRepo.save(monhoc);
    }

    @Override
    public void deleteMonhocById(Integer id) {
        monhocRepo.deleteById(id);
    }
}
