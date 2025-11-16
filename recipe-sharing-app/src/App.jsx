import { useState } from 'react'
import AddRecipeForm from './components/AddRecipeForm'
import RecipeList from './components/RecipeList'
import useRecipeStore from './components/recipeStore/useRecipeStore'
import React from 'react'

function App() {
  

  return (
    <div>
    <RecipeList/>
    <AddRecipeForm/>
    <useRecipeStore/>
    </div>
  )
}

export default App
