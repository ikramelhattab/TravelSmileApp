package com.travelsmile.repository;

import com.travelsmile.model.*;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TripRepository extends JpaRepository<Trip, Long> {}
