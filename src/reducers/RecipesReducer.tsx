const RecipesReducer = (state:any = [], action:any) => {
  switch(action.type){
    case 'SAVERECIPEACTION':
      return state = action.payload;
    case 'GETRECIPEACTION':
      return state = action.payload[0];
    case 'UPDATERECIPEACTION':
      return state = action.payload;
    case 'DELETERECIPEACTION':
      return state = action.payload;
    default:
      return state;
  }
}

export default RecipesReducer;