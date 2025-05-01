// src/main/java/com/moviemood/backend/repository/FavoriteMovieRepository.java

package com.moviemood.backend.repository;

import com.moviemood.backend.model.FavoriteMovie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FavoriteMovieRepository extends JpaRepository<FavoriteMovie, Long> {
}
