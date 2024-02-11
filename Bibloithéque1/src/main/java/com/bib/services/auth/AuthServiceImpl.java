package com.bib.services.auth;


import com.bib.dto.SignupRequest;
import com.bib.dto.UserDto;
import com.bib.entity.User;
import com.bib.enums.UserRole;
import com.bib.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AuthServiceImpl implements AuthService{

    @Autowired
    private UserRepository userRepository;

    //@Autowired
    //private BCryptPasswordEncoder bCryptPasswordEncoder;



    public UserDto createStudent(SignupRequest signupRequest){
        User user = new User();

        user.setEmail(signupRequest.getEmail());
        user.setName(signupRequest.getName());
        user.setFilires(signupRequest.getFilires());
        user.setGroupe(signupRequest.getGroupe());
        user.setClasse(signupRequest.getClasse());
        user.setPassword(new BCryptPasswordEncoder().encode(signupRequest.getPassword()));
        user.setRole(UserRole.STUDENT);
        User createStudent = userRepository.save(user);

        UserDto userDto = new UserDto();
        userDto.setId(createStudent.getId());

        return userDto;
    }

    public Boolean hasUserWithEmail(String email){
        return userRepository.findFirstByEmail(email).isPresent();
    }

    @PostConstruct
    public void createAdminAccount() {
        User adminAccount = userRepository.findByRole(UserRole.ADMIN);
        if(null == adminAccount){
            User user = new User();
            user.setEmail("admin@test.com");
            user.setName("admin");
            user.setRole(UserRole.ADMIN);
            user.setPassword(new BCryptPasswordEncoder().encode("admin"));
            userRepository.save(user);
        }
    }

    public List<User> getAllUser(){
        List<User> users = userRepository.findAll();
        return users;
    }


}
