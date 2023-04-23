import * as React from 'react';
import './RecipeCard.css';

const MediaCard = ({recipeToShow}) => {
    const {title, featured_media} = recipeToShow
    console.log('recipe param', recipeToShow, title, featured_media)

    return (
            
        <div class='recipeCard'>
            <div class="recipeImage">
                <img src={featured_media} alt={title} />
            </div>
            <div class="recipeTitle">
                {title}
            </div>
        </div>
    );
  };
  
  export default MediaCard;
  