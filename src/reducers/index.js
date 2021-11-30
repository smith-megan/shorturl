import {combineReducers} from 'redux';
import data from './data';
import params from './params'

const rootReducer=combineReducers({
data,
params
})
export default rootReducer