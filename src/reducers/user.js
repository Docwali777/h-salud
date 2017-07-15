export default function logUser(state = {user: {} }, action){
  switch(action.type){
      case 'REGISTER_USER':
      const newUser =  {...state}
      // console.log(state.user);

newUser.user = action.payload

      return newUser
      break
}
return state
}
