import React from 'react'
import {useState, useEffect} from 'react'

function HomePage() {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch("/data.json")
        .then((response) => response.json())
        .then((data) => setRecipes(data))
        .catch((error) => console.error('Error fetching the data', error))
    }, [])
    return (
    <div className='container mx-auto p-6 bg-white'>
        <h1 className='text-3xl font-bold mb-8 text-center'>Recipe List</h1>
        {recipes.length > 0 ? (
            <div className='bg-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {recipes.map((recipe) => (
                    <div key={recipe.id} className='bg-white rounded-lg p-4 transition-transform transform hover:scale-105 duration-300 hover:shadow-md'>
                        <h2 className='text-md text-center pb-4'>{recipe.title}</h2>
                        <img src = {recipe.image} alt = {recipe.title} className='mr-auto ml-auto'/>
                        <p className='text-sm mt-2 text-gray-400'>{recipe.summary}</p>
                    </div>
                ))}
            </div>
        ) : (
            <p>Loading...</p>
        )}
    </div>
    )
}

export default HomePage