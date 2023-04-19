import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRecipes } from './api';

const ListView = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await getRecipes();
      setRecipes(data);
    };
    fetchRecipes();
  }, []);

  return (
    <div className="list-view">
      <h1>Keto Recipes</h1>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.slug}>
            <Link to={`/recipe/${recipe.slug}`}>
              <img src={recipe.featured_media} alt={recipe.title} />
              <h2>{recipe.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;
