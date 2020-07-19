import axios from "axios";

export const openModal = (state) => {
    return {
        type: 'OPEN_MODAL',
        payload: state
    }
}

export const loginUser = userData => dispatch => {
    axios
      .post("http://localhost:3001/users/login", userData)
      .then(res => {
        console.log(res)
      })
      .catch(err =>
        {
            // console.log(.email)
            dispatch({
                type: 'GET_ERRORS',
                payload: err.response.data
              })    
        }
      );
  };