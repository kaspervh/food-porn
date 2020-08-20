const RecipesReducer = (state:any = [], action:any) => {
  switch(action.type){
    case 'SAVERECIPEACTION':
      return state = action.payload;
    case 'GETRECIPEACTION':
      return state = action.payload[0];
    default:
      return state;
  }
}

export default RecipesReducer;