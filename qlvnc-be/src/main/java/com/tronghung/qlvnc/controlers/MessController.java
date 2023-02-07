package com.tronghung.qlvnc.controlers;

import com.tronghung.qlvnc.Services.MessService;
import com.tronghung.qlvnc.entity.Mess;
import com.tronghung.qlvnc.entity.Monhoc;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/mess")
public class MessController {
    @Autowired
    private MessService messService;

    @GetMapping("/all")
    public ResponseEntity<List<Mess>> getAllMess () {
        List<Mess> mess = messService.getMess();
        return new ResponseEntity<>(mess, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Mess> getMessById (@PathVariable("id") Integer id) {
        Mess mess = messService.getMessById(id);
        return new ResponseEntity<>(mess, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Mess> saveMess(@RequestBody Mess mess) {
        Mess newMess = messService.saveMess(mess);
        return new ResponseEntity<>(newMess, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Mess> updateMess(@RequestBody Mess mess) {
        Mess updateMess = messService.updateMess(mess);
        return new ResponseEntity<>(updateMess, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteMess(@PathVariable("id") Integer id) {
        messService.deleteMessById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
