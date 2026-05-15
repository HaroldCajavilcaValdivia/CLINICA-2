package com.ricardopalma.clinica;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.model;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;

@WebMvcTest(PacienteController.class)
class PacienteControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void testListarPacientes() throws Exception {
        mockMvc.perform(get("/pacientes"))
                // Valida que el código de estado HTTP sea 200 (OK)
                .andExpect(status().isOk())
                // Valida que el nombre de la vista devuelta sea "pacientes"
                .andExpect(view().name("pacientes"))
                // Valida que el modelo contenga un atributo llamado "pacientes"
                .andExpect(model().attributeExists("pacientes"));
    }
}
