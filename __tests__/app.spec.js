import React from 'react';
import { Provider } from 'react-redux';
import axiosMock from 'axios';
import { render, fireEvent, cleanup } from 'react-testing-library';
import { swapJoke } from '../src/utils';
import JokesList from '../src/components/presentations/jokesList';
import Timer from '../src/components/presentations/timer';
import Joke from '../src/components/presentations/joke';

const url = 'http://api.icndb.com/jokes/random/10';

beforeAll(() => {
  axiosMock.get.mockImplementation(() =>
    Promise.resolve({
      data: { results: [] }
    })
  );
});
// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

test('Time Button Should Toggle it\'s text',async () => {
  // Arrange
  const startTimer = jest.fn(() => {});
  
  const { getByTestId } = render(
    <Timer startTimer={startTimer}/>,
  );
  
  const testID = getByTestId('timer-text');

  expect(testID.textContent).toEqual('Start Timer');
  fireEvent.click(testID);

  expect(startTimer).toHaveBeenCalledTimes(1);
  expect(testID.textContent).toEqual('Stop Timer');
});

test('Joke Component Should render the correct text',() => {
  // Arrange
  const onAction = jest.fn(() => {});
  const jokeText = 'chuck nurris counted until infity twice';
  
  const { getByTestId } = render(
    <Joke text={jokeText} type="main" onAction={onAction}/>,
  );
  
  const jokeTestId = getByTestId('joke-text');
  const buttonTestId = getByTestId('joke-action');

  expect(jokeTestId.textContent).toEqual(jokeText);
  expect(buttonTestId.textContent).toEqual('Favorite');
  fireEvent.click(buttonTestId);

  expect(onAction).toHaveBeenCalledTimes(1)
});

test('Jokes List Should Render content',() => {
  // Arrange
  const onAction = jest.fn(() => {});
  const content = [{ id: 1, text: 'good joke' }];
  
  const { getByTestId } = render(
    <JokesList content={[]} header="title" onAction={onAction}/>,
  );
  
  const panelId = getByTestId('panel-body');

  expect(panelId.textContent).toEqual('The List is Empty');
  expect(getByTestId('panel-title').textContent).toEqual('title');  
});
