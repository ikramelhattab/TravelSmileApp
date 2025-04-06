package com.travelsmile.controller;

import com.travelsmile.model.*;
import com.travelsmile.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trips")
@RequiredArgsConstructor
public class TripController {
    private final TripRepository tripRepo;
    private final TravelerRepository travelerRepo;

    @GetMapping
    public List<Trip> getAll() { return tripRepo.findAll(); }

    @PostMapping
    public Trip create(@RequestBody Trip trip) { return tripRepo.save(trip); }

    @PutMapping("/{id}")
    public ResponseEntity<Trip> update(@PathVariable Long id, @RequestBody Trip updated) {
        return tripRepo.findById(id).map(trip -> {
            trip.setName(updated.getName());
            trip.setDestination(updated.getDestination());
            return ResponseEntity.ok(tripRepo.save(trip));
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) { tripRepo.deleteById(id); }

    @PostMapping("/{tripId}/assign/{travelerId}")
    public ResponseEntity<?> assignTraveler(@PathVariable Long tripId, @PathVariable Long travelerId) {
        var trip = tripRepo.findById(tripId).orElseThrow();
        var traveler = travelerRepo.findById(travelerId).orElseThrow();
        trip.getTravelers().add(traveler);
        tripRepo.save(trip);
        return ResponseEntity.ok("Traveler assigned");
    }
}