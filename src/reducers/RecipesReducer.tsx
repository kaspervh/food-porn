const RecipesReducer = (state:any = [], action:any) => {
  switch(action.type){
    case 'SAVERECIPEACTION':
      return state = action.payload
    default:
      return state;
  }
}

export default RecipesReducer;