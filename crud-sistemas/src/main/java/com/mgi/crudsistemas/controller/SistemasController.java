package com.mgi.crudsistemas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mgi.crudsistemas.model.Sistemas;
import com.mgi.crudsistemas.repository.SistemaRepository;

@RestController
@RequestMapping("/api/sistemas")
public class SistemasController {

    @Autowired
    private SistemaRepository sistemaRepository;

    @GetMapping
    public List<Sistemas> listaAll(){
      return sistemaRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<Sistemas> novo(@RequestBody Sistemas sistema){
      return ResponseEntity.status(HttpStatus.CREATED).body(sistemaRepository.save(sistema));
    }

}
