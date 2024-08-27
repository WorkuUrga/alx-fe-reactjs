import React from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from './recipeStore';

function DeleteRecipeButton({ recipeId }) {
    const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
    const navigate = useNavigate();

    const handleClick = () => {
        deleteRecipe(recipeId);
        navigate('/');
    };

    return (
        <button onClick={handleClick}>Delete Recipe</button>
    );
}

export default DeleteRecipeButton;
