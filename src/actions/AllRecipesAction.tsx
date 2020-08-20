export const AllRecipesAction = () => {
  return(async (dispatch:any) => {
    const recipes = await fetch('http://localhost:1337/recipes');

    dispatch({
      type: 'ALLRECIPESACTION',
      payload: await recipes.json()
    })
  })
}