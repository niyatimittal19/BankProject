package com.example.pnc_project.model;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Entity;
import java.util.Date;
import java.util.List;
import java.util.ArrayList;
import jakarta.persistence.*;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstname;

    private String lastname;

    @Column(unique = true, length = 9)
    private String ssn;

    @Temporal(TemporalType.DATE)
    private Date dob;

    @ElementCollection
    @CollectionTable(name = "user_fico_scores", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "fico_score")
    private List<Integer> ficoScore = new ArrayList<>();

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getSsn() {
        return ssn;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }


    public List<Integer> getNumbers() {
        return ficoScore;
    }

    public Integer getRecentFicoScore(){
        if (ficoScore.isEmpty()) {
            return null; // or throw an exception if you prefer
        }
        return ficoScore.get(ficoScore.size() - 1);
    }
}
