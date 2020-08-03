import React, {useContext,useEffect} from 'react'
import {GlobalContext} from '../../context/GlobalContext';
import './recipePage.styles.css'

export const RecipePage = ({match,history}) => {

  const {recipes, getRecipes} = useContext(GlobalContext);

  useEffect(() => {
    getRecipes();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
console.log(recipes);
const id = match.params.id;
console.log((match.params.id));
  let result = [];
  result=recipes.map(recipe => recipe.id === id);
  console.log(result);

    return (
        <div>
          <div className='back' onClick={() => history.goBack()}>&#8592; Go Back</div>
            <div className='container'>
              <div className='flex-child'>
                <h2>Ingredients:</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <h2>How To Prepare:</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
              </div>
                <div className='flex-child'>
              
                <span className='ratings'>&#9733;&#9733;&#9733;</span>
                <p>Favorite this Recipe <img className='Icon'src="https://img.icons8.com/cotton/64/000000/like--v1.png" alt='likeIcon'/> </p>
                <form>
                  <label>Comments..</label>
                  <textarea id="review" name="review" rows="4" cols="50" placeholder='Type Something here...' />
                  <button>Add Comments</button>
                  </form>
                
                </div>
            </div>
        </div>
      
    )
}
