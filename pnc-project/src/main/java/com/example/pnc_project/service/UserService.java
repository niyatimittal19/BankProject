package com.example.pnc_project.service;
import com.example.pnc_project.model.User;
import com.example.pnc_project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;
import java.util.Random;
import java.util.List;
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;
    private Random random = new Random();
    public User createOrUpdateUser(User user) {
        Optional<User> existingUser = userRepository.findBySsn(user.getSsn());

        if (existingUser.isPresent()) {
            User userFromDb = existingUser.get();
            userFromDb.setFirstname(user.getFirstname());
            userFromDb.setLastname(user.getLastname());
            userFromDb.setDob(user.getDob());
            userFromDb.getNumbers().add(generateFicoNumber());
            userRepository.save(userFromDb);
            return userFromDb;
        } else {
            user.getNumbers().add(generateFicoNumber());
            return userRepository.save(user);
        }
    }

    private int generateFicoNumber() {
        return random.nextInt(301) + 500; // Generates a number between 500 and 800
    }

    public User findBySsn(String ssn) {
        Optional<User> user = userRepository.findBySsn(ssn);
        return user.orElseThrow(() -> new RuntimeException("User not found with SSN: " + ssn));
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }
}
