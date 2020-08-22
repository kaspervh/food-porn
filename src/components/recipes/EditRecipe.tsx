import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {UpdateRecipeAction, GetRecipeAction} from '../../actions/RecipesAction'
import {useParams, useHistory} from 'react-router-dom';

const EditRecipe = () => {
  
  const {recipeId} = useParams();
  const dispatch = useDispatch();
  const recipe = useSelector((state:any) => state.RecipesReducer)
  const [headline, setHeadline] = useState('');
  const [mealType, setMealType] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [numOfPeople, setNumOfPeople] = useState('');
  const [image, setImages] = useState('')
  const [ingredients, setIngredients] = useState([{amount: '', type: '', product: ''}])
  const [newRecipe, setNewRecipe] = useState('')

  useEffect(() => {
    if(recipe.length !== 0){
      if( recipe._id !== recipeId){
        dispatch(GetRecipeAction(recipeId))
      }else{
        setHeadline(recipe.headline);
        setMealType(recipe.mealType);
        setShortDescription(recipe.shortDescription);
        setThumbnail(recipe.thumbnail);
        setNumOfPeople(recipe.numOfPeople);
        setImages(recipe.images);
        setIngredients(recipe.ingredients);
        setNewRecipe(recipe.recipe)
      }
    }else{
      dispatch(GetRecipeAction(recipeId))
    }
  },[recipe])

  const converToBase64 = (keyword:string, file:any) =>{  
    let reader:any = new FileReader();  
    reader.readAsDataURL(file[0]);
    reader.onload = () => {
      if(keyword === 'thumbnail') setThumbnail(reader.result)
      if(keyword === 'image')setImages(reader.result);
    }
  }

  const addIngredient = () => {
    const newIngredient = {amount: '', type: '', product: ''}
    setIngredients([...ingredients, newIngredient])
  }

  const removeIngredient = () => {
    let newIngredients  = [...ingredients];
    newIngredients.pop()
    setIngredients(newIngredients)
  }

  const setIngredient = (index:any, key:any, value:string) => {
    let items:any = [...ingredients];
    items[index][key] = value;
    setIngredients(items)
  } 

  const saveRecipe = () => {
    dispatch(UpdateRecipeAction(headline, mealType, shortDescription, thumbnail, numOfPeople, image, ingredients, newRecipe))
  }

  return(
    <div className='container'>
      <div className="content">
        <h1>Rediger opskrift</h1>
        <br/>
        <div style={{marginBottom: '50px'}}>
      
        <section className="column">
          <h2>Forside oplysninger</h2>
          <label>Overskrift</label>
          <input type="text" value={headline} placeholder='Overskrift' onChange={(e:any) => setHeadline(e.target.value)}/>
        
          <label>Måltids type</label>
          <select onChange={(e:any) => setMealType(e.target.value)}>
            <option value="">Vælg type</option>
            <option value="morgenmad">Morgenmad</option>
            <option value="frokost">Frokost</option>
            <option value="aftensmad">Aftensmad</option>
            <option value="desert">Desert</option>
            <option value="snack">Snack</option>
          </select>
          <label>Kort beskrivele</label>
          <input type="text" value={shortDescription} placeholder='Kort beskrivelse' onChange={(e:any) => setShortDescription(e.target.value)}/>
          <label>Thumbnail</label>
          <input type="file" placeholder="Thumbnail" onChange={(e:any) => converToBase64('thumbnail', e.target.files) }/>
          <label>Billede</label>
          <input type="file" placeholder="Faktisk billede" onChange={(e:any) => converToBase64('image', e.target.files)}/>
        
        </section>
      
        <section className="column">
          <h2>Ingridienser</h2>
          <label htmlFor="Antal personer"></label>
          <input type="" value={numOfPeople} placeholder="Antal personer" onChange={(e:any) => setNumOfPeople(e.target.value)}/>
          {ingredients.map((ingredient, index) =>
            <div className="row" key={index}>
              <div className='column' >
                <label>Mængde</label>
                <input type="text" value={ingredient.amount} placeholder='Mængde' onChange={(e:any) => setIngredient(index, 'amount', e.target.value)}/>
              </div>
              <div className='column' >
                <select name="type" value={ingredient.type} onChange={(e:any) => setIngredient(index, 'type', e.target.value)}>
                  <option value="">Vælg type ...</option>
                  <option value="stk">Stk</option>
                  <option value="mg">Miligram</option>
                  <option value="g">Gram</option>
                  <option value="kg">Kilo</option>
                  <option value="ml">Mililiter</option>
                  <option value="dl">Deciliter</option>
                  <option value="L">Liter</option>
                  <option value="tsk">The ske</option>
                  <option value="spsk">Spise ske</option>
                </select>
              </div> 
              <div className='column'>
                <label>produkt</label>
                <input type="text" placeholder='Produkt' value={ingredient.product} onChange={(e:any) => setIngredient(index, 'product', e.target.value)}/>
              </div>
            </div>
          )}
          
          <button className='button' onClick={(e) => addIngredient()}>Tilføj Ingridiens</button>
          <button className='button' onClick={(e) => removeIngredient()}>Fjern sidste ingridiens</button>
          
        </section>
      
        <section className='column'>
          <h2>Opskrift</h2>
          <textarea value={newRecipe}  cols={100} rows={100} onChange={(e:any) => setNewRecipe(e.target.value)}></textarea>
        </section>
      </div>
      <button className="button" onClick={e => saveRecipe()}>Gem Opskift</button>
    </div>
  </div>
  )

}

export default EditRecipe;