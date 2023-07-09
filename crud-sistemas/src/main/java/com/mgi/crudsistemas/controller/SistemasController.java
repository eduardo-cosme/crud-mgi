package com.mgi.crudsistemas.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

    @GetMapping("/{id}")
    public ResponseEntity<Sistemas> findByNome(@PathVariable Long id){
      return sistemaRepository.findById(id).
              map(rec -> ResponseEntity.ok().body(rec)).
              orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Sistemas> novo(@RequestBody Sistemas sistema){
      return ResponseEntity.status(HttpStatus.CREATED).body(sistemaRepository.save(sistema));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Sistemas>  atualizar(@PathVariable Long id, @RequestBody Sistemas sistema){
            return sistemaRepository.findById(id).
              map(rec -> {
                rec.setNome(sistema.getNome());
                rec.setCodSistema(sistema.getCodSistema());
                rec.setCodSistema(sistema.getCodSistema());
                rec.setDescricao(sistema.getDescricao());
                rec.setSigla(sistema.getSigla());
                rec.setEsquema(sistema.getEsquema());
                rec.setOrigem(sistema.getOrigem());
                rec.setLogo(sistema.getLogo());
                Sistemas sistemaAtualizado = sistemaRepository.save(rec);
                return ResponseEntity.ok().body(sistemaAtualizado);
              }
                ).
              orElse(ResponseEntity.notFound().build());

    }

}
