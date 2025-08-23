package nl.miwnn.ch16.dennis.Ngredients.models;

import jakarta.persistence.*;

@Entity
public class Recipe {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;
    private String imageUrl;
    private String description;

    @Column(columnDefinition = "TEXT")
    private String ingredients;

    @Column(columnDefinition = "TEXT")
    private String instructions;

    private String preparationTime;

    private boolean isFavourite;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public String getInstructions() {
        return instructions;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public String getPreparationTime() {
        return preparationTime;
    }

    public void setPreparationTime(String preparationTime) {
        this.preparationTime = preparationTime;
    }

    public boolean getIsFavourite() {
        return isFavourite;
    }

    public void setIsFavourite(boolean favourite) {
        this.isFavourite = favourite;
    }
}
