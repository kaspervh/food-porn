import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, Link, useHistory} from 'react-router-dom';

import {GetRecipeAction, DeleteRecipeAction} from '../../actions/RecipesAction';


const ShowRecipe = () => {
  const history  = useHistory();
  const {recipeId} = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector((state:any) => state.RecipesReducer);
  const currentUser = useSelector((state:any) => state.CurrentUserReducer);
  const [newNumOfPeople, setNewNumOfPeople] = useState('false');
  const [newIngredients, setNewIngreedients] = useState([]);

  useEffect(() => {
    dispatch(GetRecipeAction(recipeId))
  },[])

  useEffect(() =>{
    if(typeof recipe.massage !== 'undefined' && recipe.messge === 'recipe deleted'){history.push('/')}
    if(recipe.length !== 0){
      setNewIngreedients(recipe.ingredients)
    }
    
  },[recipe])

  const calculateIngredients = (value:string) => {
    setNewNumOfPeople(value);

    if(value.length !== 0){
      let ingredients:any = []
      for(let ingredient of recipe.ingredients){
        const amount = (parseFloat(ingredient.amount) / parseInt(recipe.numOfPeople)) * parseInt(value)
        const type = ingredient.type
        const product = ingredient.product
        ingredients.push({amount, type, product})
      } 
      setNewIngreedients(ingredients);
    }
  }

  const deleteRecipe = async () => {
    await dispatch(DeleteRecipeAction(recipeId))
    history.push('/')
  }

  return(
    <div className="container">
      {recipe.length !== 0 ?
      <div className="content">
        {console.log(currentUser)}
        {currentUser !== 0  ? 
          <div className="admin-box">
            <div className="button">Rediger opskrift</div>
            <div className="button" onClick={(e:any) => deleteRecipe()}>Slet Opskrift</div>
          </div>
          : ''
        }
        
        <h1>{recipe.headline}</h1>
        <div className="recipe_container" style={{justifyContent: 'center'}}>
          <div className="ingredients_box">
            <h5>Ingridienser til <input type="text" style={{width: '50px', fontWeight: 'bolder'}} value={newNumOfPeople.match(/[a-z][A-z]/) ? recipe.numOfPeople : newNumOfPeople } onChange={(e:any) => calculateIngredients(e.target.value)}/> personer</h5>
            {newIngredients.map((ingredient:any) => 
              <p>{`${ingredient.amount} ${ingredient.type} ${ingredient.product}`} <br/></p>
            )}
          </div>
          <img src={recipe.images}/>
        </div>
        <div className="recipe_container" style={{flexDirection: 'column', alignItems: 'flex-start'}}>
          <p>{recipe.shortDescription}</p>
          <br/>
            <p>{recipe.recipe}</p>
        </div> 
      </div>
      :''}
    </div>
  )
}

export default ShowRecipe;