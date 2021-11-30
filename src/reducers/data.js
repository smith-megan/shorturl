import {RECEIVE_API_DATA} from '../actions'

function helloWorld(state={}, {type,data=""}){
  switch(type) {
    case RECEIVE_API_DATA:
    return data;
    default:
      return state;
  }
};

export default helloWorld