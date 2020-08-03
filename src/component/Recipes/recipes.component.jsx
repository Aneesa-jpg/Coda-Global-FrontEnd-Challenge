import React from 'react'
import { withRouter } from 'react-router-dom'

import './recipes.styles.css'

const Recipes = ({recipe,history,match}) => {

    
    return (
      <div>
            <div className="flip-card card-container ">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={recipe.image} alt="Avatar" />
                  <p className='bottom-right'>{recipe.name}</p>
                </div>
                <div className="flip-card-back" onClick = {() => history.push(`${match.url}${recipe.id}`)}>
                            <h3>{recipe.name}</h3>
                            <p>{recipe.description}</p>
                            <span>${recipe.price}</span>
                            <img className='likeIcon'src="https://img.icons8.com/cotton/64/000000/like--v1.png" alt='likeIcon'/>
                </div>
              </div>
            </div>
      </div>
      

    )
}

export default withRouter(Recipes);
