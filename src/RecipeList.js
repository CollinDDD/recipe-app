import React from "react";

function RecipeList({ recipes, handleDelete }) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th id="name" >Name</th>
            <th id="cuisine" >Cuisine</th>
            <th id="photo" >Photo</th>
            <th id="ingredients" >Ingredients</th>
            <th id="preparation" >Preparation</th>
            <th id="actions" >Actions</th>
          </tr>
        </thead>
        <tbody>
        {recipes.map((recipe, index) => (
    <tr key={index}>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img src={recipe.photo} alt={recipe.name} />
      </td>
      <td className="content_td"><p>{recipe.ingredients}</p></td>
      <td className="content_td"><p>{recipe.preparation}</p></td>
      <td>
        <button
          name="delete"
          onClick={() => handleDelete(index)}
        >
          Delete
        </button>
      </td>
    </tr>
  ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
