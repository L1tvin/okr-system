package com.okr.controller;

import com.okr.exception.ResourceNotFoundException;
import com.okr.model.OKR;
import com.okr.repository.OKRRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v1/")
public class OKRController {

    @Autowired
    private OKRRepository okrRepository;

    @GetMapping("/okrs")
    public List<OKR> getAllOKRs() {
        return okrRepository.findAll();
    }

    @PostMapping("/okrs")
    public OKR createOKR(@RequestBody OKR okr) {
        return okrRepository.save(okr);
    }

    @GetMapping("/okrs/{id}")
    public ResponseEntity<OKR> getOKRById(@PathVariable Long id) {
        OKR okr = okrRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("OKR not exist with id: " + id));
        return ResponseEntity.ok(okr);
    }

    @PutMapping("/okrs/{id}")
    public ResponseEntity<OKR> updateOKR(@PathVariable Long id, @RequestBody OKR okrDetails) {
        OKR okr = okrRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("OKR not exist with id: " + id));
        okr.setName(okrDetails.getName());
        okr.setDescription(okrDetails.getDescription());
        okr.setOwner(okrDetails.getOwner());
        OKR updatedOKR = okrRepository.save(okr);
        return ResponseEntity.ok(updatedOKR);
    }

    @DeleteMapping("/okrs/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteOKR(@PathVariable Long id) {
        OKR okr = okrRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("OKR not exist with id: " + id));
        okrRepository.delete(okr);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
