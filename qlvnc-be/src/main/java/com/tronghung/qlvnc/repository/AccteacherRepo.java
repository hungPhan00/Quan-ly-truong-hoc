package com.tronghung.qlvnc.repository;

import com.tronghung.qlvnc.entity.Accteacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccteacherRepo extends JpaRepository<Accteacher,Integer> {
    void deleteAccteacherById(Integer id);
    Optional<AccteacherRepo> getAccteacherById(Integer id);
}
