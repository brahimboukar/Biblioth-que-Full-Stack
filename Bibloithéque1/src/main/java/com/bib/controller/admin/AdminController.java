package com.bib.controller.admin;


import com.bib.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import com.bib.services.auth.AuthService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    public final AuthService authService;

    @GetMapping("/student")
    public ResponseEntity<List<User>> getAllUsers(){
        List<User> users = authService.getAllUser();
        return ResponseEntity.ok(users);
    }
}
