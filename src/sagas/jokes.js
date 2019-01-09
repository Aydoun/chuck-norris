import {takeLatest, put, call, fork} from "redux-saga/effects";
import { requestJokesList } from '../api';
import { REQUEST_JOKES_LIST, PUT_JOKES_LIST } from '../constants';

function* getJokesAsync(payload) {
    try {
        const data = yield call(requestJokesList, payload.quantity);
        yield put({
            type: PUT_JOKES_LIST, 
            favorites: [],
            data,
        });
    }
    catch(e){
        console.log(e.message, 'message');
        // yield put({type: GET_BRANDS_ASYNC_ERROR});
    }
}

function* getJokes(){
    yield takeLatest(REQUEST_JOKES_LIST, getJokesAsync)
}

export default [
    fork(getJokes),
];
