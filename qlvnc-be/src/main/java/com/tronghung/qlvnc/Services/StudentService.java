package com.tronghung.qlvnc.Services;

import com.tronghung.qlvnc.entity.Student;

import java.util.List;

public interface StudentService {

    Student saveStudent(Student student);

    List<Student> getStudent();

    Student getStudentById(Integer id);


    Student updateStudent(Student student);

    void deleteStudentById(Integer id);

}
