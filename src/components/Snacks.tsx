import React, {useState, useEffect} from 'react'; 
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const Snacks = () => {
  const allRecipes = useSelector((state:any) => state.AllRecipesReducer)
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const rec:any = []
    for(let recipe of allRecipes){
      if(recipe.mealType === 'snacks'){
        rec.push(recipe)
      }
    }
    setRecipes(rec);
  },[]);

  return(
    <div className="container">
      <div className="recipies-container">
        {recipes.length !== 0 ? 
          recipes.map((recipe:any, index:number) => 
          <Link to={`/opskrifter/${recipe._id}`} key={index}>
            <div className="recepie_box">
              <img src={recipe.thumbnail}/>
            </div>
          </Link>
          
        )
          :
          <h6>Der er desvære ingen opskrifter her endnu</h6>
        }
      </div>
    </div>
  )
}

export default Snacks;