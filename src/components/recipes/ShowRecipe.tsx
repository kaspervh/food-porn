import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, Link} from 'react-router-dom';
import '../../styles/ShowRecipe.css'
import {GetRecipeAction} from '../../actions/RecipesAction';


const ShowRecipe = () => {
  const {recipeId} = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector((state:any) => state.RecipesReducer);
  const [newNumOfPeople, setNewNumOfPeople] = useState('false');
  const [newIngredients, setNewIngreedients] = useState([]);

  useEffect(() => {
    dispatch(GetRecipeAction(recipeId))
  },[])

  useEffect(() =>{
    if(recipe.length !== 0){
      setNewIngreedients(recipe.ingredients)
      console.log(recipe.ingredients)
      console.log(newIngredients)
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

  return(
    <div className="container">
      {recipe.length !== 0 ?
      <div className="content">
        
          <h1>{recipe.headline}</h1>
          <div className="recipe_container" style={{justifyContent: 'center'}}>
            <div className="ingredients_box">
              <h5>Ingridienser til <input type="text" value={newNumOfPeople.match(/[a-z][A-z]/) ? recipe.numOfPeople : newNumOfPeople } onChange={(e:any) => calculateIngredients(e.target.value)}/> personer</h5>
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