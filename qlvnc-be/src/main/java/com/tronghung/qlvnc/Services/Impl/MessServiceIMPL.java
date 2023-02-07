package com.tronghung.qlvnc.Services.Impl;

import com.tronghung.qlvnc.Services.MessService;
import com.tronghung.qlvnc.entity.Mess;
import com.tronghung.qlvnc.repository.MessRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class MessServiceIMPL implements MessService {
    @Autowired
    private MessRepo messRepo;

    @Override
    public Mess saveMess(Mess mess) {
        return messRepo.save(mess);
    }

    @Override
    public List<Mess> getMess() {
        return messRepo.findAll();
    }

    @Override
    public Mess getMessById(Integer id) {
        return messRepo.findById(id).get();
    }

    @Override
    public Mess updateMess(Mess mess) {
        return messRepo.save(mess);
    }

    @Override
    public void deleteMessById(Integer id) {
        messRepo.deleteById(id);
    }
}
