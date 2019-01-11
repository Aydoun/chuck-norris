import {takeLatest, put, call, fork, select} from "redux-saga/effects";
import { requestJokesList } from '../api';
import { REQUEST_JOKES_LIST, PUT_JOKES_LIST, REQUEST_ONE_JOKE, PUT_ONE_JOKE, MOVE_FAVORITES } from '../constants';
import { getFromStorage, saveToStorage, swapJoke } from '../utils';

function* getJokesAsync(payload) {
    try {
        const jokes = yield call(requestJokesList, payload.quantity);
        yield put({
            type: PUT_JOKES_LIST, 
            favorites: getFromStorage('favorites') || [],
            jokes,
        });
    }
    catch(e){
        console.log(e.message, 'message');
    }
}

function* getOneJokeAsync(payload) {
    try {
        const joke = yield call(requestJokesList, payload.quantity);
        const favorites = yield select(s => s.jokes.favorites);
        
        // Persist Joke To Favorites
        saveToStorage('favorites', favorites.concat(joke));

        yield put({
            type: PUT_ONE_JOKE, 
            favorites: favorites.concat(joke),
        });
    }
    catch(e){
        console.log(e.message, 'message');
    }
}

function* moveFavorite(payload) {
    const { id, actionType } = payload;
    const { jokesList, favorites } = yield select(s => s.jokes);
    let swapResult;
    if (actionType === 'main') {
        swapResult = swapJoke(id, jokesList, favorites);
        saveToStorage('favorites', swapResult.destination);

        yield put({
            type: PUT_JOKES_LIST,
            favorites: swapResult.destination,
            jokes: swapResult.source,
        });
    } else {
        swapResult = swapJoke(id, favorites, jokesList);
        saveToStorage('favorites', swapResult.source);

        yield put({
            type: PUT_JOKES_LIST,
            favorites: swapResult.source,
            jokes: swapResult.destination,
        });
    }    
}

function* getJokes(){
    yield takeLatest(REQUEST_JOKES_LIST, getJokesAsync)
}

function* getOneJoke(){
    yield takeLatest(REQUEST_ONE_JOKE, getOneJokeAsync)
}

function* moveFavoriteJoke(){
    yield takeLatest(MOVE_FAVORITES, moveFavorite)
}


export default [
    fork(getJokes),
    fork(getOneJoke),
    fork(moveFavoriteJoke),
];
