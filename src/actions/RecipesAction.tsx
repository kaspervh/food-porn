import RecipesReducer from "../reducers/RecipesReducer"

export const SaveRecipeAction = (headline:string, mealType:string, shortDescription:string, thumbnail:string, numOfPeople:string, images:string, ingredients:any, recipe:string) => {
  return( async (dispatch:any) => {
    const data = await fetch('http://localhost:1337/recipes', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        headline, 
        mealType, 
        shortDescription, 
        thumbnail, 
        numOfPeople, 
        images, 
        ingredients, 
        recipe
      })
    })


    dispatch({
      type: 'SAVERECIPEACTION',
      payload: await data.json()
    })
  })
}


export const GetRecipeAction = (recipeId:string) => {
  return( async (dispatch:any) => {
    const recipe = await fetch(`http://localhost:1337/recipes/${recipeId}`)

    dispatch({
      type: 'GETRECIPEACTION',
      payload: await recipe.json(),
    })
  })

}