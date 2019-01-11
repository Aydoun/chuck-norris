import { PUT_JOKES_LIST, REQUEST_JOKES_LIST, PUT_ONE_JOKE } from '../constants';

const initialState = {
    favorites: [],
    jokesList: [],
    listLoading: false,
};

const jokesReducer = (state = initialState, action) => {
    switch(action.type){
        case REQUEST_JOKES_LIST:
            return Object.assign({}, state, { listLoading: true });
        case PUT_JOKES_LIST:
            return Object.assign({}, state, {
                favorites: action.favorites,
                jokesList: action.jokes,
                listLoading: false,
            });
        case PUT_ONE_JOKE:
            return Object.assign({}, state, {
                favorites: action.favorites,
            });
        default:
            return state;
    }
}

export default jokesReducer;
