import React from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';

function App() {
  const sampleRecipeId = 1;

  return (
    <>
      <RecipeList />
      <AddRecipeForm />
      <RecipeDetails recipeId={sampleRecipeId} />
    </>
  );
}

export default App;
