export default function logUser(state = {user: [] }, action){
  switch(action.type){
      case 'REGISTER_USER':
      const newUser =  [...state.user, ...action.payload]
      console.log(state.user);
      console.log(newUser);
      return newUser
      break
}
return state
}
