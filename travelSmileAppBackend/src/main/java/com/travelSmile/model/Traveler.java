package com.travelsmile.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Traveler {
    @Id @GeneratedValue
    private Long id;
    private String name;
    private String email;

    @ManyToMany(mappedBy = "travelers")
    private List<Trip> trips;
}