// src/main/java/com/moviemood/backend/model/FavoriteMovie.java

package com.moviemood.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FavoriteMovie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String tmdbId;
    private String title;
    private String posterPath;
}
