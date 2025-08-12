package nl.miwnn.ch16.dennis.Ngredients.repositories;


import nl.miwnn.ch16.dennis.Ngredients.models.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Long> {
}
