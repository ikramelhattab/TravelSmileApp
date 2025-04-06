package com.travelsmile.controller;

import com.travelsmile.model.Traveler;
import com.travelsmile.repository.TravelerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/travelers")
@RequiredArgsConstructor
public class TravelerController {
    private final TravelerRepository travelerRepo;

    @GetMapping
    public List<Traveler> getAll() { return travelerRepo.findAll(); }

    @PostMapping
    public Traveler create(@RequestBody Traveler traveler) { return travelerRepo.save(traveler); }
}
