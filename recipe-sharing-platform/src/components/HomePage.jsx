import React from 'react'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

function HomePage() {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch("/data.json")
        .then((response) => response.json())
        .then((data) => setRecipes(data))
        .catch((error) => console.error('Error fetching the data', error))
    }, [])
    return (
    <div className='container mx-auto p-6 bg-rgb(160, 224, 199)'>
        <h1 className='text-3xl font-bold mb-8 text-center'>Recipe List</h1>
        <div>
            <Link 
            to="/add-recipe"
            className='mb-10 bg-blue-400 p-2 rounded-2xl hover:opacity-80'
            >Add New Recipe
            </Link>
        </div>
        {recipes.length > 0 ? (
            <div className='bg-rgb(160, 224, 199) grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {recipes.map((recipe) => (
                    <Link 
                    to={`/recipe/${recipe.id}`}
                    key={recipe.id} className='rounded-2xl p-4 transition-transform transform hover:scale-95 duration-300 hover:shadow-md bg-green-100 mt-6'>
                        <h2 className='text-md text-center pb-4'>{recipe.title}</h2>
                        <img src = {recipe.image} alt = {recipe.title} className='mr-auto ml-auto w-full h-48 sm:h-62 md:w-full object-cover mb-4 rounded-3xl hover:shadow-lg hover:transition-transform:'/>
                        <p className='text-sm mt-2 text-gray-400'>{recipe.summary}</p>
                    </Link>
                ))}
            </div>
        ) : (
            <p>Loading...</p>
        )}
    </div>
    )
}

export default HomePage