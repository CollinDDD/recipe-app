import React, { useState } from "react";

function RecipeCreate({addRecipe}) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
    actions: "",
  };
  
  const [formData, setFormData] = useState({ ...initialFormState });

  const handleNameChange = (event) =>
    setFormData({ ...formData, name: event.target.value });
  const handleCuisineChange = (event) =>
    setFormData({ ...formData, cuisine: event.target.value });
  const handlePhotoChange = (event) =>
    setFormData({ ...formData, photo: event.target.value });
  const handleIngredientsChange = (event) =>
    setFormData({ ...formData, ingredients: event.target.value });
  const handlePreparationChange = (event) =>
    setFormData({ ...formData, preparation: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);
    setFormData({ ...initialFormState });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                id="name"
                name="name"
                value={formData.name}
                placeholder="Name"
                onChange={handleNameChange}
              />
            </td>
            <td>
              <input
                id="cuisine"
                name="cuisine"
                value={formData.cuisine}
                placeholder="Cuisine"
                onChange={handleCuisineChange}
              />
            </td>
            <td>
              <input
                id="photo"
                name="photo"
                value={formData.photo}
                placeholder="URL"
                onChange={handlePhotoChange}
              />
            </td>
            <td>
              <textarea
                id="ingredients"
                name="ingredients"
                value={formData.ingredients}
                placeholder="ingredients"
                onChange={handleIngredientsChange}
              />
            </td>
            <td>
              <textarea
                id="preparation"
                name="preparation"
                value={formData.preparation}
                placeholder="preparation"
                onChange={handlePreparationChange}
              />
            </td>
            <td>
              <button type="submit" onClick={handleSubmit}>Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
