import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {REQUEST_API_DATA, receiveApiData} from "./actions"
import{fetchData} from'./api';

// import Api from '...'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
   try {
     const data = yield call(fetchData,'https://www.google.com/');
     console.log(data)
     yield put(receiveApiData(data));
    } catch (e) {
    console.log(e.message)
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// function* mySaga() {
//   yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
// }

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}

// export default mySaga;