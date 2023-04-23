import { useEffect, useState } from 'react';
import { getRecipes } from '../../api';
import RecipeCard from "./components/RecipeCard/RecipeCard";
import './ListView.css';
import { useNavigate } from "react-router-dom";

const ListView = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await getRecipes();
      setRecipes(data);
    };
    fetchRecipes();
  }, []);

  const handleClick = (id) => {
    navigate(`/recipe/${id}`);
  }

  return (
    <div id="list-view">
          <div id="list-container">
                {recipes.map(recipe => (
                  <div class="list-item">
                    {console.log('allo', recipe)}
                    <div onClick={()=>handleClick(recipe.slug)}><RecipeCard recipeToShow={recipe} key={recipe.slug} /></div> 
                  </div>
                ))}
          </div>
    </div>
  );
};

export default ListView;
