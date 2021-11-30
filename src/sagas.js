import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {REQUEST_HELLO_WORLD, receiveHelloWorld} from "./actions"


// import Api from '...'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* helloWorld(action) {
   try {
     //do api call
     // const user = yield call(Api.fetchUser, action.payload.userId);
     yield put(receiveHelloWorld("Hello World from redux saga!"));
    } catch (e) {
    yield put(receiveHelloWorld("Hello World from redux saga"));
      // yield put({type: "USER_FETCH_FAILED", message: e.message});
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
  yield takeLatest(REQUEST_HELLO_WORLD,helloWorld);
}

// export default mySaga;