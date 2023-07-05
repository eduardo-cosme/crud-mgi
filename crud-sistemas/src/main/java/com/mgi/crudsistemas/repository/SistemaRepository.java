package com.mgi.crudsistemas.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mgi.crudsistemas.model.Sistemas;

@Repository
public interface SistemaRepository extends JpaRepository<Sistemas, Long> {

}
