import useRecipeStore from "./recipeStore";


const DeleteRecipeButton = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === recipeId)
    );

    return (
      <div>
    <button onClick={() => deleteRecipe(id)}>
      Delete Recipe
    </button>
      </div>
    );
  };