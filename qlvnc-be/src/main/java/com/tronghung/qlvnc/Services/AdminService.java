package com.tronghung.qlvnc.Services;

import com.tronghung.qlvnc.entity.Admin;


import java.util.List;

public interface AdminService {
    Admin saveAdmin(Admin admin);

    List<Admin> getAdmin();

    Admin getAdminById(Integer id);

    Admin updateAdmin(Admin admin);

    void deleteAdminById(Integer id);
}
