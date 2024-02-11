package com.bib.dto;

import com.bib.enums.UserRole;

public class UserDto {

    private Long id;

    private String email;

    private String name;

    private UserRole userRole;

    private String password;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
