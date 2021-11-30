import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {REQUEST_API_DATA, receiveApiData} from "./actions"
import{fetchData} from'./api';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
   try {
     console.log(action, "test")
     const data = yield call(fetchData,action.params);
     yield put(receiveApiData(data));
    } catch (e) {
    console.log(e.message)
    }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}