import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'


function RecipeDetail() {
  const {id} = useParams()
  const [recipe, setRecipe] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
      const dataRecipe = data.find(recipe => recipe.id === parseInt(id))
      setRecipe(dataRecipe);
      setLoading(false)
    })
    .catch((error) => {console.error('Error occured while fetching the data', error)
      setLoading(false)
    })
  },[id])
    if (!recipe) {
      return <p>Recipe not found</p>
    }
    if(loading) {
      return <p>Loading...</p>
    }
  return (
    <div className='container'>
        <h1 className='font-bold mb-6 text-2xl'>{recipe.title}</h1>
        <img src={recipe.image} alt={recipe.title} 
          className='xs:h-40 xs:w-40 mb-2 lg:h-96 lg:w-96 rounded-3xl mr-auto ml-auto hover:scale-105 sm:w-56 sm:h-56'
        />
        <div>
          <p className='max-w-80 mr-auto ml-auto mb-8'>{recipe.summary}</p>
        </div>
        {recipe.ingredients && (
          <div className='text-center mb-10'>
            <h2 className='font-semibold mb-2'>Ingredients</h2>
            <ul className='list-disc'>{recipe.ingredients.map((ingredient, index) =>(
              <li key={index}className='mr-auto ml-auto mb-2 w-40 text-left'>{ingredient}</li>
            ))}
            </ul>
          </div>
        )}
        {recipe.instructions && (
          <div>
            <h2 className='mb-2 font-semibold'>Instructions</h2>
            <ol className='list-decimal text-left'> {recipe.instructions.map((instruction, index) => (
              <li key={index} className='mr-auto ml-auto mb-2 w-1/2 xs:w-full lg:w-3/4'>{instruction}</li>
            ))}</ol>
          </div>
        )}
    </div>
  )
}

export default RecipeDetail