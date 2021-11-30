import {REQUEST_API_DATA} from '../actions'

export default (state={}, {type,params=""})=>{
  switch(type) {
    case REQUEST_API_DATA:
    return params;
    default:
      return state;
  }
};