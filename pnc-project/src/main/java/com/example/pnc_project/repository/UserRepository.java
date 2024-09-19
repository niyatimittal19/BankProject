package com.example.pnc_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.pnc_project.model.User;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findBySsn(String ssn);
}
