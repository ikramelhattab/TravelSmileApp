package com.travelsmile.model;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Trip {
    @Id @GeneratedValue
    private Long id;
    private String name;
    private String destination;

    @ManyToMany
    private List<Traveler> travelers;
}
