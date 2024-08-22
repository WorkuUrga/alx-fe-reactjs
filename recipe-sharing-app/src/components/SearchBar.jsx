
import React from 'react'
import {useRecipeStore} from './recipeStore'

function SearchBar() {
    const setSearchTerm = useRecipeStore(state => state.setSearchTerm);
    return (
        <input
            type="text"
            placeholder="search recipes..."
            onChange={(e) => setSearchTerm(e.target.value)} />
        )
}

export default SearchBar
