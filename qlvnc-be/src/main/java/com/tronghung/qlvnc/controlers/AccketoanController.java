package com.tronghung.qlvnc.controlers;

import com.tronghung.qlvnc.Services.AccketoanService;
import com.tronghung.qlvnc.entity.Accketoan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/accketoan")
public class AccketoanController {
    @Autowired
    private AccketoanService accketoanService;

    @GetMapping("/all")
    public ResponseEntity<List<Accketoan>> getAllAccketoan () {
        List<Accketoan> accketoan = accketoanService.getAccketoan();
        return new ResponseEntity<>(accketoan, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Accketoan> getAccketoanById (@PathVariable("id") Integer id) {
        Accketoan accketoan = accketoanService.getAccketoanById(id);
        return new ResponseEntity<>(accketoan, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Accketoan> saveAccketoan(@RequestBody Accketoan accketoan) {
        Accketoan newAccketoan = accketoanService.saveAccketoan(accketoan);
        return new ResponseEntity<>(newAccketoan, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Accketoan> updateAccketoan(@RequestBody Accketoan accketoan) {
        Accketoan updateAccketoan = accketoanService.updateAccketoan(accketoan);
        return new ResponseEntity<>(updateAccketoan, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteAccketoan(@PathVariable("id") Integer id) {
        accketoanService.deleteAccketoanById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
