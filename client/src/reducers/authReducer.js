import { FETCH_USER } from "../actions/types";


// It return one of the three value either null ,usermodel or false
export default function (state = null, action) {
  switch(action.type){
    case FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
}


