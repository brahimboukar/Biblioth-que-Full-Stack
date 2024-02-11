package com.bib.services.auth;


import com.bib.dto.SignupRequest;
import com.bib.dto.UserDto;
import com.bib.entity.User;

import java.util.List;

public interface AuthService {


    Boolean hasUserWithEmail(String email);
    UserDto createStudent(SignupRequest signupRequest);

    public List<User> getAllUser();
}
