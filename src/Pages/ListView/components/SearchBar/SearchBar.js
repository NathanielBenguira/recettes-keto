import React from 'react';

const SearchBar = (allRecipes) => {
    const {title} = allRecipes
    console.log('allRecipes', allRecipes);

    return (
        <div>
          <input type="search"/>

          

        </div>
    );
  };
  
  export default SearchBar;