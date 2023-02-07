package com.tronghung.qlvnc.repository;

import com.tronghung.qlvnc.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface TeacherRepo extends JpaRepository<Teacher,Integer> {
    void deleteTeacherById(Integer id);
    Optional<Teacher> getTeacherById(Integer id);
}
