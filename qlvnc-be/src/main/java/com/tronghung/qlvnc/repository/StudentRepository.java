package com.tronghung.qlvnc.repository;

import com.tronghung.qlvnc.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentRepository extends JpaRepository<Student,Integer> {
    void deleteStudentById(Integer id);
    Optional<Student> getStudentById(Integer id);
}
