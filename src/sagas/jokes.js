import {takeLatest, put, call, fork} from "redux-saga/effects";
import { requestJokesList } from '../api';
import { REQUEST_JOKES_LIST, PUT_JOKES_LIST, REQUEST_ONE_JOKE, PUT_ONE_JOKE } from '../constants';
import { getFromStorage, saveToStorage } from '../utils';

function* getJokesAsync(payload) {
    try {
        const data = yield call(requestJokesList, payload.quantity);
        yield put({
            type: PUT_JOKES_LIST, 
            favorites: getFromStorage('favorites') || [],
            data,
        });
    }
    catch(e){
        console.log(e.message, 'message');
    }
}

function* getOneJokeAsync(payload) {
    try {
        const data = yield call(requestJokesList, payload.quantity);

        // Persist Joke To Favorites
        saveToStorage('favorites', (getFromStorage('favorites') || []).concat(data));

        yield put({
            type: PUT_ONE_JOKE, 
            data,
        });
    }
    catch(e){
        console.log(e.message, 'message');
    }
}

function* getJokes(){
    yield takeLatest(REQUEST_JOKES_LIST, getJokesAsync)
}

function* getOneJoke(){
    yield takeLatest(REQUEST_ONE_JOKE, getOneJokeAsync)
}

export default [
    fork(getJokes),
    fork(getOneJoke),
];
