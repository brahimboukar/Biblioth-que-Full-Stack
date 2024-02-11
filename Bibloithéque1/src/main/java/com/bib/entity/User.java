package com.bib.entity;


import com.bib.enums.UserRole;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;

    private String email;

    private String filires;

    private String groupe;

    private String classe;

    private String password;

    private UserRole role;


    @Lob
    @Column(columnDefinition = "longblob")
    private byte[] img;





}
