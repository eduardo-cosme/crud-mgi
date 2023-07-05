package com.mgi.crudsistemas;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.mgi.crudsistemas.model.Sistemas;
import com.mgi.crudsistemas.repository.SistemaRepository;

@SpringBootApplication
public class CrudSistemasApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSistemasApplication.class, args);
	}

  @Bean
  CommandLineRunner initDatabase(SistemaRepository sistemaRepository){
    return args -> {
      sistemaRepository.deleteAll();
      Sistemas sistema = new Sistemas();
      sistema.setNome("Agregador");
      sistema.setCodSistema("0001");
      sistema.setDescricao("Sistema Agregador");
      sistema.setSigla("CBF");
      sistema.setEsquema("Sistema Acessos");
      sistema.setOrigem("Origem 1");
      sistema.setLogo("xxxxxxxx");
      sistemaRepository.save(sistema);
    };

  }

}
