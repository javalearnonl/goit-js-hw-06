const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsListElement = document.getElementById('ingredients');

const ingredientsItems = ingredients.map(ingredients => {
  const ingredientItemAdd = document.createElement('li');
  ingredientItemAdd.textContent = ingredients;
  ingredientItemAdd.classList.add('item');
  return ingredientItemAdd;
});

ingredientsListElement.append(...ingredientsItems);