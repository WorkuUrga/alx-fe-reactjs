import React from 'react'
import {Link} from 'react-router-dom'
import  useRecipeStore  from './recipeStore';

function RecipeList() {
    const recipes = useRecipeStore(state => state.recipes);
    return (
    <div>
        {recipes.map(recipe =>(
            <div key={recipe.id}>
                <h3>
                    <link to ={`/recipe/${recipe.id}`}>{recipe.title}</link>
                </h3>
                <p>{recipe.description}</p>
            </div>
        ))}
    </div>
    )
}

export default RecipeList