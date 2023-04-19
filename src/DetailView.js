import { useEffect, useState } from 'react';
import { getRecipeDetails } from './api';
import { Routes, Route, useParams } from 'react-router-dom';


const DetailView = () => {
  const [recipe, setRecipe] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    const fetchRecipe = async () => {
      const data = await getRecipeDetails(id);
      console.log('data recipe details', data)
      setRecipe(data);
    };
    fetchRecipe();
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="detail-view">
      
      <h1>{recipe.title}</h1>
      
      <img src={recipe.featured_media} alt={recipe.title} />
      
      {recipe?.categories?.map(item => <div> {item.name} </div>)}

      {recipe?.difficulty?.map(item => <div> {item} </div>)}

      {recipe?.nbr_persons?.map(item => <div> {item} Personnes</div>)}
      
      {recipe?.ingredients?.map(item => <div> {item} </div>)}
      
      {recipe?.steps?.map(item => <div> <img src={item.image} /> {item.description} </div>)}
    </div>
  );
};

export default DetailView;
