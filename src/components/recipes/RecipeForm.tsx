import React, {useState, useEffect} from 'react';

const RecipeForm = () => {
  const [headline, setHeadline] = useState('');
  const [mealType, setMealType] = useState('');
  const [shortDescription, setShortDescription] = useState();
  const [thumbnail, setThumbnail] = useState('');
  const [numOfPeople, setNumOfPeople] = useState('');
  const [images, setImages] = useState([])
  const [ingredients, setIngredients] = useState([{amount: '', type: '', product: ''}])
  const [recipie, setRecipe] = useState('')

  useEffect(() =>{
    console.log(ingredients)
  }, [ingredients])

  const converToBase64 = (keyword:string, file:any) =>{  
    let reader:any = new FileReader();  
    reader.readAsDataURL(file[0]);
    reader.onload = () => {
      if(keyword === 'thumbnail') setThumbnail(reader.result)
      if(keyword === 'image'){
        let pictures:any = [...images];
        pictures.push(reader.result);
        setImages(pictures);
      }
    }
  }

  const addIngredient = () => {
    const newIngredient = {amount: '', type: '', product: ''}
    setIngredients([...ingredients, newIngredient])
  }

  const setIngredient = (index:any, key:any, value:string) => {
    let items:any = [ingredients];
    items[index][key] = value;
    setIngredients(items)
  } 


  return(
    <div style={{marginBottom: '50px'}}>
      {console.log(thumbnail)}
      
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
        <input type="text" value={numOfPeople} placeholder="Antal personer" onChange={(e:any) => setNumOfPeople(e.target.value)}/>
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
                <option value="Miligram">Miligram</option>
                <option value="Gram">Gram</option>
                <option value="Kilo">Kilo</option>
                <option value="Mililiter">Mililiter</option>
                <option value="Deciliter">Deciliter</option>
                <option value="Liter">Liter</option>
              </select>
            </div> 
              <div className='column'>
              <label>produkt</label>
              <input type="text" placeholder='Produkt' value={ingredient.product} onChange={(e:any) => setIngredient(index, 'product', e.target.value)}/>
            </div>
          </div>
        )}
          
        <button className='button' onClick={(e) => addIngredient()}>Tilføj Ingridiens</button>
          
      </section>
      
      <section className='column'>
        <h2>Opskrift</h2>
        <textarea  cols={100} rows={100} onChange={(e:any) => setRecipe(e.target.value)}></textarea>
      </section>
    </div>
  )
}

export default RecipeForm;