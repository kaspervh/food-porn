import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {AllRecipesAction} from '../actions/AllRecipesAction';

const Home = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state:any) => state.AllRecipesReducer);
  
  useEffect(() => {
    dispatch(AllRecipesAction())
  },[])

  return(
    <div className='container'>
      <div className="big_image"></div>
      <br/>
      <div className="recipies-container">
        {recipes.length !== 0 ?
          recipes.map((recipe:any, index:number) => 
          <Link to={`/opskrifter/${recipe._id}`} key={index}>
            <div className="recepie_box">
              <img src={recipe.thumbnail}/>
            </div>
          </Link>
          
        ): ''}
      </div>
    </div>
  )
}

export default Home;