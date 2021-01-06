import axios from 'axios'
import React, { useEffect, useState } from 'react'
import RecipeCard from './RecipeCard'

interface Recipe {
    uuid: string
    name: string
    image: string[]
    description: string
}

const Cookbook = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        axios.get('/recipes').then((res) => setRecipes(res.data))
    }, [])

    return (
        <div>
            {recipes.map((recipe: Recipe) => {
                return (
                    <RecipeCard
                        key={recipe.uuid}
                        name={recipe.name}
                        images={recipe.image}
                        description={recipe.description}
                    ></RecipeCard>
                )
            })}
        </div>
    )
}

export default Cookbook
