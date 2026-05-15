package com.ricardopalma.clinica;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;

@WebMvcTest(UsuarioController.class)
class UsuarioControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void testInicio() throws Exception {
        mockMvc.perform(get("/"))
                .andExpect(status().isOk())
                .andExpect(view().name("CLINICA RICARDO PALMA"));
    }

    @Test
    void testRegistro() throws Exception {
        mockMvc.perform(get("/register"))
                .andExpect(status().isOk())
                .andExpect(view().name("register"));
    }

    @Test
    void testProgramar() throws Exception {
        mockMvc.perform(get("/programar"))
                .andExpect(status().isOk())
                .andExpect(view().name("programar"));
    }

    @Test
    void testMisCitas() throws Exception {
        mockMvc.perform(get("/mis-citas"))
                .andExpect(status().isOk())
                .andExpect(view().name("mis-citas"));
    }

    @Test
    void testLogin() throws Exception {
        mockMvc.perform(get("/login"))
                .andExpect(status().isOk())
                .andExpect(view().name("login"));
    }
}
