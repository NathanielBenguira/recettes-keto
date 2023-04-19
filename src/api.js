import axios from 'axios';

const apiUrl = 'https://www.latendresseencuisine.com/wp-json/wp/v2/posts/recipes';

export const getRecipes = async () => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        paged: 1,
        posts_per_page: 5,
        category_name: '',
        tag: 'recette-keto'
      }
    });
    return response.data.recipes;
  } catch (error) {
    console.error(error);
  }
};

const recipeUrl = 'https://www.latendresseencuisine.com/wp-json/wp/v2/posts/recipe/ok/';

export const getRecipeDetails = async (slug) => {
    try {
      const response = await axios.get(recipeUrl+slug);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
