import { useEffect, useState } from 'react';
import { getRecipes } from '../../api';
import RecipeCard from "./components/RecipeCard/RecipeCard";
import './ListView.css';
import { useNavigate } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

const ListView = () => {
  
  const getFilteredItems = (query, items) => {
    if (!query) {
      return items;
    }
    return items.filter((recipe) => recipe.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(query));
  };

  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchRecipes = async () => {
      const data = await getRecipes();
      setRecipes(data);
    };
    fetchRecipes();
  }, []);

  const filteredItems = getFilteredItems(query, recipes);

  const handleClick = (id) => {
    navigate(`/recipe/${id}`);
  }

  return (
    <div id="list-view">
          <div id="list-container">
          <i class="fa fa-search icon"></i>
            <input id="searchInput" type="text" onChange={(e) => setQuery(e.target.value)} />
                {filteredItems.map(recipe => (
                  <div class="list-item" key={Math.random}>
                    {console.log('allo', recipe)}
                    <div onClick={()=>handleClick(recipe.slug)}><RecipeCard recipeToShow={recipe} key={recipe.slug} /></div> 
                  </div>
                ))}
          </div>
    </div>
  );
};

export default ListView;
