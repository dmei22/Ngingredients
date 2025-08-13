package nl.miwnn.ch16.dennis.Ngredients.services;

import nl.miwnn.ch16.dennis.Ngredients.Exceptions.RecipeNotFoundException;
import nl.miwnn.ch16.dennis.Ngredients.models.Recipe;
import nl.miwnn.ch16.dennis.Ngredients.repositories.RecipeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class RecipeService {

    private final RecipeRepository recipeRepository;

    public RecipeService(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
    }

    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }

    public Recipe addRecipe(Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    public Recipe UpdateRecipe(Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    public void deleteRecipe(Long id) {
        recipeRepository.deleteById(id);
    }

    public Recipe findById(Long id) {
        Optional<Recipe> recipeOptional = recipeRepository.findById(id);
        if (recipeOptional.isPresent()) {
            return recipeOptional.get();
        } else {
            throw new RecipeNotFoundException("Recipe by id " + id + " was not found");
        }
    }

}
