package com.tronghung.qlvnc.repository;

import com.tronghung.qlvnc.entity.Accketoan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AccketoanRepo extends JpaRepository<Accketoan,Integer> {
    void deleteAccketoanById(Integer id);
    Optional<AccketoanRepo> getAccketoanById(Integer id);
}
