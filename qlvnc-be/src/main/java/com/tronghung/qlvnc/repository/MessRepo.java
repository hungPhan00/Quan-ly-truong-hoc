package com.tronghung.qlvnc.repository;


import com.tronghung.qlvnc.entity.Mess;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MessRepo extends JpaRepository<Mess,Integer> {
    void deleteMessById(Integer id);
    Optional<MessRepo> getMessById(Integer id);
}
