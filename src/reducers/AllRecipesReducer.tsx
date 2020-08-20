const AllRecipesReducer = (state:any = [], action:any) => {
  switch(action.type){
    case 'ALLRECIPESACTION':
      return state = action.payload;
    default:
      return state;
  }
}

export default AllRecipesReducer;