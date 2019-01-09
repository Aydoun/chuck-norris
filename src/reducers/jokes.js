import { PUT_JOKES_LIST } from '../constants';

const initialState = {
    favorites: [],
    jokes: [],
};

const jokesReducer = (state = initialState, action) => {
    switch(action.type){
        case PUT_JOKES_LIST:
            return Object.assign({}, state, {
                favorites: action.favorites,
                jokesList: action.data,
            });
        default:
            return state;
    }
}

export default jokesReducer;
