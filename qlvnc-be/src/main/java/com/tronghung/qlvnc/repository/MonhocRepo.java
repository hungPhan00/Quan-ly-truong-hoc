package com.tronghung.qlvnc.repository;

import com.tronghung.qlvnc.entity.Monhoc;
import com.tronghung.qlvnc.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MonhocRepo extends JpaRepository<Monhoc,Integer> {
    void deleteMonhocById(Integer id);
    Optional<Student> getMonhocById(Integer id);
}
