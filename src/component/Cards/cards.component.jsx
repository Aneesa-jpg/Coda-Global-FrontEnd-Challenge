import React, {useContext, useEffect} from 'react'
import {GlobalContext} from '../../context/GlobalContext';
import Recipes from '../Recipes/recipes.component';

import './cards.styles.css'

export const Cards = () => {
    const {recipes, getRecipes} = useContext(GlobalContext);

  useEffect(() => {
    getRecipes();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  console.log(recipes);

    return (
        <div className='cardList'>
            {recipes.map(recipe => <Recipes key={recipe.id} recipe={recipe}/>)}
        </div>
    )
}
