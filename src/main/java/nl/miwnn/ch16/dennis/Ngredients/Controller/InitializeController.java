package nl.miwnn.ch16.dennis.Ngredients.Controller;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import nl.miwnn.ch16.dennis.Ngredients.models.Recipe;
import nl.miwnn.ch16.dennis.Ngredients.services.RecipeService;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Controller;

import java.io.File;
import java.io.IOException;
import java.util.List;

@Controller
public class InitializeController {

    private final RecipeService recipeService;

    public InitializeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    // Run when Spring application is running
    // Parameter is only used to trigger seed method
    @EventListener
    public void seed(ContextRefreshedEvent ignoredEvent) {
        addRecipes();
    }

    private void addRecipes() {
        // Mapper class for converting JSON to Java
        ObjectMapper mapper = new ObjectMapper();

        try {
            List<Recipe> recipes = mapper.readValue(
                    new File("src/main/resources/example_recipes.json"),
                    // Helps deserialize JSON data
                    new TypeReference<>() {
                    });

            for (Recipe recipe : recipes) {
                recipeService.addRecipe(recipe);
            }
        } catch (IOException exception) {
            System.err.println("Failed to initialize example recipes: ");
            System.err.println(exception.getMessage());
        }
    }
}
