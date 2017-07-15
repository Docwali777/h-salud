export default function logUser(state = {user: {} }, action){
  switch(action.type){
      case 'REGISTER_USER':
      const newUser =  {...state}
      // console.log(state.user);

newUser.user = action.payload
console.log('state',state.user);
console.log('new', newUser.user);
      return newUser
      break
}
return state
}
