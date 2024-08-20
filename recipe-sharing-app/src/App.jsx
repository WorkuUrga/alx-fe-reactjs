import { useState } from 'react'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeDetails from './components/RecipeDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RecipeList />
      <AddRecipeForm />
      <RecipeDetails />
    </>
  )
}

export default App
