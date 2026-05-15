package com.ricardopalma.clinica;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class UsuarioController {

    @GetMapping("/")
    public String inicio() {
        return "CLINICA RICARDO PALMA";
    }

    @GetMapping("/register")
    public String registro() {
        return "register";
    }

    @GetMapping("/programar")
    public String programar() {
        return "programar";
    }

    @GetMapping("/mis-citas")
    public String misCitas() {
        return "mis-citas";
    }

    @GetMapping("/login")
    public String login() {
        return "login";
    }
}