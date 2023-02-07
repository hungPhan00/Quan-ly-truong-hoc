package com.tronghung.qlvnc.Services.Impl;

import com.tronghung.qlvnc.Services.AdminService;
import com.tronghung.qlvnc.entity.Admin;
import com.tronghung.qlvnc.repository.AdminRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AdminServiceIMPL implements AdminService {

    @Autowired
    private AdminRepo adminRepo;

    @Override
    public Admin saveAdmin(Admin admin) {
        return adminRepo.save(admin);
    }

    @Override
    public List<Admin> getAdmin() {
        return adminRepo.findAll();
    }

    @Override
    public Admin getAdminById(Integer id) {
        return adminRepo.findById(id).get();
    }

    @Override
    public Admin updateAdmin(Admin admin) {
        return adminRepo.save(admin);
    }

    @Override
    public void deleteAdminById(Integer id) {
        adminRepo.deleteById(id);
    }
}
