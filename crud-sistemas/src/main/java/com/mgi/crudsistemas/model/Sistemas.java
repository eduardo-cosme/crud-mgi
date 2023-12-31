package com.mgi.crudsistemas.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Sistemas {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @Column(length = 50, nullable = false)
  private String nome;

  @Column(length = 30, nullable = false)
  private String codSistema;

  @Column(length = 100, nullable = false)
  private String descricao;

  @Column(length = 5, nullable = false)
  private String sigla;

  @Column(length = 20, nullable = false)
  private String esquema;

  @Column(length = 20, nullable = false)
  private String origem;

  @Column(length = 50, nullable = false)
  private String logo;


}
