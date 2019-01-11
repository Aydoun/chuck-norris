import reducer from '../src/reducers/jokes';
import mockData from '../src/dataMocks/jokes';
import { PUT_JOKES_LIST, REQUEST_JOKES_LIST, PUT_ONE_JOKE } from '../src/constants/';

const initialState = {
  favorites: [],
  jokesList: [],
};

test('should return the initial state', () => {
  expect(reducer({}, {})).toEqual({});
});

test('should handle filling the jokes list', () => {
  const action = {
    type: PUT_JOKES_LIST,
    jokes: mockData,
    favorites: [],
  };
  const reducerState = reducer(initialState, action);

  expect(reducerState.jokesList).toEqual(action.jokes);
  expect(reducerState.favorites).toEqual([]);
});

test('should handle the loading state', () => {
  const action = {
    type: REQUEST_JOKES_LIST,
  };

  expect(reducer(initialState, action).listLoading).toEqual(true);
});

test('should insert joke into favorites', () => {
  const action = {
    type: PUT_ONE_JOKE,
    favorites: [{
      id: 1,
      joke: 'joke1',
    }]
  };

  expect(reducer(initialState, action).favorites.length).toEqual(1);
  expect(reducer(initialState, action).favorites).toEqual(action.favorites);
});



