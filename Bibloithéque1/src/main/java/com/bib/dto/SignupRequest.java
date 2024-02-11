package com.bib.dto;

import lombok.Data;

@Data
public class SignupRequest {

    private String name;

    private String email;

    private String filires;

    private String groupe;

    private String classe;

    private String password;

}
