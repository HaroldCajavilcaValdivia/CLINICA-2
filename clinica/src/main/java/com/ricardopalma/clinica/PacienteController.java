package com.ricardopalma.clinica;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.ArrayList;
import java.util.List;

@Controller
public class PacienteController {

    @GetMapping("/pacientes")
    public String listarPacientes(Model model) {

        List<Paciente> lista = new ArrayList<>();

        lista.add(new Paciente(1, "Juan Perez", "74859632", "987654321"));
        lista.add(new Paciente(2, "Maria Lopez", "74125896", "912345678"));

        model.addAttribute("pacientes", lista);

        return "pacientes";
    }
}