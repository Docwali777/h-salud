import axios from 'axios'

export function userRegistration(user){

  return (dispatch) =>{
    return  axios.post('/api/user', user)
      .then(res =>{
        console.log('AXIOS POST',res.data);
        dispatch({
          type:'REGISTER_USER',
          payload: res.data
        })
      })
      .catch(err =>{
        console.log(err);
      })

}
}
