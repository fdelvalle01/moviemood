// src/main/java/com/moviemood/backend/controller/FavoriteMovieController.java

package com.moviemood.backend.controller;

import com.moviemood.backend.model.FavoriteMovie;
import com.moviemood.backend.repository.FavoriteMovieRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/favorites")
@CrossOrigin(origins = "*")
public class FavoriteMovieController {

    private final FavoriteMovieRepository repository;

    public FavoriteMovieController(FavoriteMovieRepository repository) {
        this.repository = repository;
    }

    @PostMapping
    public FavoriteMovie addFavorite(@RequestBody FavoriteMovie movie) {
        return repository.save(movie);
    }

    @GetMapping
    public List<FavoriteMovie> getFavorites() {
        return repository.findAll();
    }

    @DeleteMapping("/{id}")
    public void deleteFavorite(@PathVariable Long id) {
        repository.deleteById(id);
    }

    
}
