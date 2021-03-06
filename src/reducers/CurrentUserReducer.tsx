const saveToLocalStorage = (payload:any ) => {
  try {
    if(payload.message === 'user is loged in'){
      const localStoragePayload = JSON.stringify(payload);
      sessionStorage.setItem('currentUser', localStoragePayload);
    }
  } catch (error) {
    console.log(error);
  }
}

const loadCurrentUser = () => {
  try{
    const localStoragePayload =sessionStorage.getItem('currentUser');
    if(localStoragePayload === null){return []}
    return JSON.parse(localStoragePayload)
  }catch(error){
    console.log(error)
  }
}

const destroyCurrentUser = () => {
  try {
    localStorage.removeItem('currentUser')
  } catch (error) {
    console.log(error)
  }
}

const CurrentUserReducer = (state:any = loadCurrentUser(), action:any) => {
  switch(action.type){
    case 'LOGINUSER':
      saveToLocalStorage(action.payload);
      console.log(action.payload)
      return state = action.payload;
    case 'LOGOUTUSER':
      destroyCurrentUser()
      return state = [];
    default:
      console.log(state)
      return state;
  }
}

export default CurrentUserReducer;