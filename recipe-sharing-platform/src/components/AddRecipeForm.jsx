import React from 'react'
import { useState } from 'react'

function AddRecipeForm() {
  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [steps, setSteps] = useState('')
  const [error, setError] = useState({})

  const validateLogic = ()=> {
    const errors = {}
    if(!title) errors.title = "Enter the title"
    if(!summary) errors.summary = "Enter the summary fot the recipe"
    if(!ingredients) errors.ingredients = "Enter ingredients"
    if(ingredients.split('\n').length < 2) errors.ingredients = "At least two ingredients are required";
    if(!steps) errors.steps = "Enter the Instructions"
    return errors;
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    const validateErrors = validateLogic()
    if(Object.keys(validateErrors).length > 0) {
      setError(validateErrors)
    }else {
      console.log({title, summary, ingredients, steps})
      setError({})
    }
  }

  return (
    <div className='container bg-blue-100 w-3/4 mr-auto ml-auto'>
      <h1 className='text-3xl font-bold text-center pt-4 pb-4'>Add new Recipe</h1>
    <form onSubmit = {handleSubmit} className='rounded-3xl flex flex-col gap-2'>
        <label>Recipe Title:</label>
        <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="focus:outline-none focus:ring-2 pl-4"
      />
      {error.title && (
        <p className='err'>{error.title}</p>
      )}

      <label className=''>Recipe Summary:</label>
      <textarea 
        type="text"
        value = {summary} 
        onChange={(e) =>setSummary(e.target.value)}
        className='focus:outline-none focus:ring-2 pl-2 pt-1'
      />
      {error.summary && 
      <p className='err'>{error.summary}</p>}

      <label>Recipe Ingredients:</label>
      <textarea
        type="text"
        value={ingredients}
        onChange={(e) =>setIngredients(e.target.value)}
        className='focus:outline-none focus:ring-2 pl-2 pt-1'
      />
      {error.ingredients && 
      <p className='err'>{error.ingredients}</p>}

      <label>Recipe Instructions:</label>
      <textarea
        type="text"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
       className='focus:outline-none focus:ring-2 pl-2 pt-1'
      />
      {error.steps &&
      <p className='err'>{error.steps}</p>}
      <button className='py-4 bg-blue-200 w-1/2 mr-auto ml-auto rounded-xl mb-4 hover:scale-95 active:bg-blue-500' type="submit">Submit Recipe</button>
    </form>
    </div>
  )
}

export default AddRecipeForm