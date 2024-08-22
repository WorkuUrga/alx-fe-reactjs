import React from 'react'
import useRecipeStore from './recipeStore'

function DeleteRecipeButton() {
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe)
    const handleClick = () => {
        deleteRecipe(recipeId);
    }
    return (
        <div>
            <button onClick ={handleClick}>Delete Recipe</button>
        </div>
    )
}

export default DeleteRecipeButton