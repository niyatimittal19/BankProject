package com.example.pnc_project.controller;
import com.example.pnc_project.model.User;
import java.util.List;
import com.example.pnc_project.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class UserController {
    @Autowired
    private UserService userRepository;

    @PostMapping("/user")
    public User createUser(@RequestBody User user) {
        return userRepository.createOrUpdateUser(user);
    }

    @GetMapping("/user")
    List<User> getUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{ssn}")
    public User getUserBySsn(@PathVariable String ssn) {
        return userRepository.findBySsn(ssn);
    }
}

