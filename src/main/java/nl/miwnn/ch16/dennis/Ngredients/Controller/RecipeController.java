package nl.miwnn.ch16.dennis.Ngredients.Controller;

import nl.miwnn.ch16.dennis.Ngredients.models.Recipe;
import nl.miwnn.ch16.dennis.Ngredients.services.RecipeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/recipe")
public class RecipeController {

    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Recipe>> allRecipes() {
        List<Recipe> recipeList = recipeService.getAllRecipes();
        return new ResponseEntity<>(recipeList, HttpStatus.OK);
    }

    @GetMapping("/random")
    public ResponseEntity<Long> randomRecipe() {
        // Recipe ids start with 1
        int randomId = (int) (Math.random() * recipeService.getAllRecipes().size()) + 1;
        return new ResponseEntity<>((long) randomId, HttpStatus.OK);
    }

    @GetMapping("/find/{id}")
    public ResponseEntity<Recipe> findById(@PathVariable("id") Long id) {
        Recipe recipe = recipeService.findById(id);
        return new ResponseEntity<>(recipe, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Recipe> addRecipe(@RequestBody Recipe recipe) {
        Recipe newRecipe = recipeService.addRecipe(recipe);
        return new ResponseEntity<>(newRecipe, HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Recipe> updateRecipe(@RequestBody Recipe recipe) {
        Recipe updateRecipe = recipeService.addRecipe(recipe);
        return new ResponseEntity<>(updateRecipe, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteRecipe(@PathVariable("id") Long id) {
        recipeService.deleteRecipe(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
