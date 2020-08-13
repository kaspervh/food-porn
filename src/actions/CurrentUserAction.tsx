export const CurrentUserAction = (email:string, password:string) => {
  return( async (dispatch:any) => {
    const currentUser = await fetch('http://localhost:1337//auth/login', {
      method: "POST",
      headers: {"ContentType": "application/json"},
      body: JSON.stringify({
        email: email,
        password: password
      })
    })

    console.log(currentUser)

    dispatch({
      type: 'LOGINUSER',
      payload: await currentUser.json()
    })
  })
}

export const LogoutUserAction = () => {
  return({
    type: 'LOGOUTUSER'
  })
}