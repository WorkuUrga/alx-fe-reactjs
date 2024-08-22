import React, { useEffect } from 'react';
import useRecipeStore from './recipeStore';

function RecipeList() {
    const { recipes, filteredRecipes, searchTerm, setSearchTerm, filterRecipes } = useRecipeStore();

    useEffect(() => {
        filterRecipes();
    }, [searchTerm, recipes]); 
    const recipesToDisplay = searchTerm ? filteredRecipes : recipes;

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search recipes..."
            />
            {recipesToDisplay.map(recipe => (
                <div key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                </div>
            ))}
        </div>
    );
}

export default RecipeList;
