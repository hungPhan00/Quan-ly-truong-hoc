package com.tronghung.qlvnc.controlers;

import com.tronghung.qlvnc.Services.AccteacherService;
import com.tronghung.qlvnc.entity.Accteacher;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/accteacher")
public class AccteacherController {
    @Autowired
    private AccteacherService accteacherService;

    @GetMapping("/all")
    public ResponseEntity<List<Accteacher>> getAllAccteacher () {
        List<Accteacher> accteacher = accteacherService.getAccteacher();
        return new ResponseEntity<>(accteacher, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Accteacher> getAccteacherById (@PathVariable("id") Integer id) {
        Accteacher accteacher = accteacherService.getAccteacherById(id);
        return new ResponseEntity<>(accteacher, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Accteacher> saveAccteacher(@RequestBody Accteacher accteacher) {
        Accteacher newAccteacher = accteacherService.saveAccteacher(accteacher);
        return new ResponseEntity<>(newAccteacher, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Accteacher> updateAccteacher(@RequestBody Accteacher accteacher) {
        Accteacher updateAccteacher = accteacherService.updateAccteacher(accteacher);
        return new ResponseEntity<>(updateAccteacher, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteAccteacher(@PathVariable("id") Integer id) {
        accteacherService.deleteAccteacherById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
