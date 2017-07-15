import axios from 'axios'
import {browserHistory} from 'react-router'

export function userRegistration(user){

  return (dispatch) =>{
    return  axios.post('/api/user', user)
      .then(res =>{
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
