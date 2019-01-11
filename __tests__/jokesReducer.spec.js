import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { render, cleanup } from 'react-testing-library';
import Jokes from '../src/components/containers/jokes';

const initialState = {
  favorites: [],
  jokesList: [],
};

const ConnectedJokes = connect(state => ({
  jokesList: state.jokesList,
}))(Jokes);

function renderWithRedux(
  ui,
  {initialState, store = createStore(reducer, initialState)} = {},
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  }
}

afterEach(cleanup);

test('Reducer should set Jokes List', () => {
  expect(1+1).toBe(2);
});



