package com.tronghung.qlvnc.Services;

import com.tronghung.qlvnc.entity.Teacher;

import java.util.List;

public interface TeacherService {
    Teacher saveTeacher(Teacher teacher);

    List<Teacher> getTeacher();

    Teacher getTeacherById(Integer id);

    Teacher updateTeacher(Teacher teacher);

    void deleteTeacherById(Integer id);
}
