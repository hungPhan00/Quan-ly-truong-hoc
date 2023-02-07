package com.tronghung.qlvnc.controlers;

import com.tronghung.qlvnc.Services.MonhocService;
import com.tronghung.qlvnc.entity.Monhoc;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/monhoc")
public class MonhocController {
    @Autowired
    private MonhocService monhocService;

    @GetMapping("/all")
    public ResponseEntity<List<Monhoc>> getAllMonhoc () {
        List<Monhoc> monhoc = monhocService.getMonhoc();
        return new ResponseEntity<>(monhoc, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Monhoc> getMonhocById (@PathVariable("id") Integer id) {
        Monhoc monhoc = monhocService.getMonhocById(id);
        return new ResponseEntity<>(monhoc, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Monhoc> saveMonhoc(@RequestBody Monhoc monhoc) {
        Monhoc newMonhoc = monhocService.saveMonhoc(monhoc);
        return new ResponseEntity<>(newMonhoc, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Monhoc> updateMonhoc(@RequestBody Monhoc monhoc) {
        Monhoc updateMonhoc = monhocService.updateMonhoc(monhoc);
        return new ResponseEntity<>(updateMonhoc, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteMonhoc(@PathVariable("id") Integer id) {
        monhocService.deleteMonhocById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
