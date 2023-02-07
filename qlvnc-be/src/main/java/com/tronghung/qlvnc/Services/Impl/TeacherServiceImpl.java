package com.tronghung.qlvnc.Services.Impl;

import com.tronghung.qlvnc.Services.TeacherService;
import com.tronghung.qlvnc.entity.Teacher;
import com.tronghung.qlvnc.repository.TeacherRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TeacherServiceImpl implements TeacherService {
    @Autowired
    private TeacherRepo teacherRepo;

    @Override
    public Teacher saveTeacher(Teacher teacher) {
        return teacherRepo.save(teacher);
    }

    @Override
    public List<Teacher> getTeacher() {
        return teacherRepo.findAll();
    }

    @Override
    public Teacher getTeacherById(Integer id) {
        return teacherRepo.findById(id).get();
    }

    @Override
    public Teacher updateTeacher(Teacher teacher) {
        return teacherRepo.save(teacher);
    }

    @Override
    public void deleteTeacherById(Integer id) {
        teacherRepo.deleteById(id);
    }
}
