import useRecipeStore from "./recipeStore";

const EditRecipeForm = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === recipeId)
    );

    return (
      <div>
        
      </div>
    );
  };
export default EditRecipeForm